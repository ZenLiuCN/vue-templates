/**
 * create by Zen.Liu<https://github.com/ZenLiuCN/scrollerts>
 */
class Animate {
  time =
    Date.now ||
    function() {
      return +new Date()
    }
  desiredFrames = 60
  millisecondsPerSecond = 1000
  running = {}
  counter = 1

  constructor(win: Window | any) {
    this.configAnimationFrameAction(win)
  }
  requestAnimationFrame: (cb: Function, root?: HTMLElement) => number = () => 0

  TARGET_FPS = 60
  requests = {}
  requestCount = 0
  rafHandle = 1
  intervalHandle = null
  lastActive = +new Date()

  protected configAnimationFrameAction(global: Window | any) {
    let requestFrame =
      global.requestAnimationFrame ||
      global.webkitRequestAnimationFrame ||
      global.mozRequestAnimationFrame ||
      global.oRequestAnimationFrame
    let isNative = !!requestFrame
    if (
      requestFrame &&
      !/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(
        requestFrame.toString()
      )
    ) {
      isNative = false
    }
    this.requestAnimationFrame = isNative
      ? function(callback: Function, root?: HTMLElement) {
          return requestFrame(callback, root)
        }
      : function(callback: Function, root?: HTMLElement) {
          let callbackHandle = this.rafHandle++
          // Store callback
          this.requests[callbackHandle] = callback
          this.requestCount++

          // Create timeout at first request
          if (this.intervalHandle === null) {
            this.intervalHandle = setInterval(() => {
              let time = +new Date()
              let currentRequests = this.requests

              // Reset data structure before executing callbacks
              this.requests = {}
              this.requestCount = 0

              for (let key in currentRequests) {
                if (currentRequests.hasOwnProperty(key)) {
                  currentRequests[key](time)
                  this.lastActive = time
                }
              }

              // Disable the timeout when nothing happens for a certain
              // period of time
              if (time - this.lastActive > 2500) {
                clearInterval(this.intervalHandle)
                this.intervalHandle = null
              }
            }, 1000 / this.TARGET_FPS)
          }
          return callbackHandle
        }
  }
  stop = id => {
    let cleared = this.running[id] !== null
    if (cleared) {
      this.running[id] = null
    }
    return cleared
  }
  isRunning = id => this.running[id] !== null
  start = (
    stepCallback: Function,
    verifyCallback: Function,
    completedCallback: Function,
    duration?: number,
    easingMethod?: Function,
    root?: HTMLElement
  ) => {
    let start = this.time()
    let lastFrame = start
    let percent = 0
    let dropCounter = 0
    let id = this.counter++

    // Compacting running db automatically every few new animations
    if (id % 20 === 0) {
      let newRunning = {}
      for (let usedId in this.running) {
        newRunning[usedId] = true
      }
      this.running = newRunning
    }
    let am = this
    // This is the internal step method which is called every few milliseconds
    let step = function(virtual) {
      // Normalize virtual value
      let render = virtual !== true

      // Get current time
      let now = am.time()

      // Verification is executed before next animation step
      if (!am.running[id] || (verifyCallback && !verifyCallback(id))) {
        am.running[id] = null
        completedCallback(
          am.desiredFrames -
            dropCounter / ((now - start) / am.millisecondsPerSecond),
          id,
          false
        )
        return
      }

      // For the current rendering to apply let's update omitted steps in memory.
      // This is important to bring internal state variables up-to-date with progress in time.
      if (render) {
        let droppedFrames =
          Math.round(
            (now - lastFrame) / (am.millisecondsPerSecond / am.desiredFrames)
          ) - 1
        for (let j = 0; j < Math.min(droppedFrames, 4); j++) {
          step(true)
          dropCounter++
        }
      }

      // Compute percent value
      if (duration) {
        percent = (now - start) / duration
        if (percent > 1) {
          percent = 1
        }
      }

      // Execute step callback, then...
      let value = easingMethod ? easingMethod(percent) : percent
      if (
        (stepCallback(value, now, render) === false || percent === 1) &&
        render
      ) {
        am.running[id] = null
        completedCallback(
          am.desiredFrames -
            dropCounter / ((now - start) / am.millisecondsPerSecond),
          id,
          percent === 1 || duration === undefined
        )
      } else if (render) {
        lastFrame = now
        am.requestAnimationFrame(step, root)
      }
    }

    // Mark as running
    am.running[id] = true

    // Init first step
    am.requestAnimationFrame(step, root)

    // Return unique animation ID
    return id
  }
}
const numbericEqual = (lhs: number, rhs: number, epsilon: number) => {
  if (epsilon === undefined) {
    epsilon = Math.pow(10, -14)
  }
  return Math.abs(lhs / rhs) - 1.0 < epsilon
}
const NOOP = function() {}
const easeOutCubic = function(pos: number) {
  return Math.pow(pos - 1, 3) + 1
}
const easeInOutCubic = function(pos: number) {
  if ((pos /= 0.5) < 1) {
    return 0.5 * Math.pow(pos, 3)
  }
  return 0.5 * (Math.pow(pos - 2, 3) + 2)
}
const animate = new Animate(window)
export interface Options {
  scrollingX?: boolean
  scrollingY?: boolean
  animating?: boolean
  animationDuration?: number
  bouncing?: boolean
  locking?: boolean
  paging?: boolean
  snapping?: boolean
  zooming?: boolean
  minZoom?: number
  maxZoom?: number
  speedMultiplier?: number
  scrollingComplete?: Function
  penetrationDeceleration?: number
  penetrationAcceleration?: number
}
//older scroller from http://popham.github.io/scroller/
export class Scroller {
  protected __callback: Function
  protected options = {
    /** Enable scrolling on x-axis */
    scrollingX: true,

    /** Enable scrolling on y-axis */
    scrollingY: true,

    /** Enable animations for deceleration, snap back, zooming and scrolling */
    animating: true,

    /** duration for animations triggered by scrollTo/zoomTo */
    animationDuration: 250,

    /** Enable bouncing (content can be slowly moved outside and jumps back after releasing) */
    bouncing: true,

    /** Enable locking to the main axis if user moves only slightly on one of them at start */
    locking: true,

    /** Enable pagination mode (switching between full page content panes) */
    paging: false,

    /** Enable snapping of content to a configured pixel grid */
    snapping: false,

    /** Enable zooming of content via API, fingers and mouse wheel */
    zooming: false,

    /** Minimum zoom level */
    minZoom: 0.5,

    /** Maximum zoom level */
    maxZoom: 3,

    /** Multiply or decrease scrolling speed **/
    speedMultiplier: 1,

    /** Callback that is fired on the later of touch end or deceleration end,
            provided that another scrolling action has not begun. Used to know
            when to fade out a scrollbar. */
    scrollingComplete: NOOP,

    /** This configures the amount of change applied to deceleration when reaching boundaries  **/
    penetrationDeceleration: 0.03,

    /** This configures the amount of change applied to acceleration when reaching boundaries  **/
    penetrationAcceleration: 0.08
  }
  protected __isSingleTouch: boolean = false
  protected __isTracking: boolean = false
  protected __didDecelerationComplete: boolean = false
  protected __isGesturing: boolean = false
  protected __isDragging: boolean = false
  protected __isDecelerating: number | boolean = 0
  protected __isAnimating: number | boolean = 0

  protected __clientLeft: number = 0
  protected __clientTop: number = 0
  protected __clientWidth: number = 0
  protected __clientHeight: number = 0
  protected __contentWidth: number = 0
  protected __contentHeight: number = 0
  protected __snapWidth: number = 100
  protected __snapHeight: number = 100
  protected __zoomLevel: number = 1
  protected __scrollLeft: number = 0
  protected __scrollTop: number = 0
  protected __maxScrollLeft: number = 0
  protected __maxScrollTop: number = 0
  protected __scheduledLeft: number = 0
  protected __scheduledTop: number = 0
  protected __scheduledZoom: number = 0

  protected __lastTouchLeft: number = -1
  protected __lastTouchTop: number = -1
  protected __lastTouchMove: number = -1
  /**
   * array by left,top,timestamp
   */
  protected __positions: number[] = []

  protected __minDecelerationScrollLeft: number = 0
  protected __minDecelerationScrollTop: number = 0
  protected __maxDecelerationScrollLeft: number = 0
  protected __maxDecelerationScrollTop: number = 0
  protected __decelerationVelocityX: number = 0
  protected __decelerationVelocityY: number = 0

  protected __zoomComplete: Function | null = null
  protected __interruptedAnimation: boolean = false
  protected __initialTouchLeft: number = 0
  protected __initialTouchTop: number = 0
  protected __zoomLevelStart: number = 0
  protected __lastScale: number = 0
  protected __enableScrollX: boolean | null = null
  protected __enableScrollY: boolean | null = null

  constructor(callback: Function, options: Options) {
    this.__callback = callback
    this.options = Object.assign(this.options, options)
  }

  setDimensions = (
    clientWidth: number,
    clientHeight: number,
    contentWidth: number,
    contentHeight: number
  ) => {
    // Only update values which are defined
    if (clientWidth !== null) {
      this.__clientWidth = clientWidth
    }

    if (clientHeight !== null) {
      this.__clientHeight = clientHeight
    }

    if (contentWidth !== null) {
      this.__contentWidth = contentWidth
    }

    if (contentHeight !== null) {
      this.__contentHeight = contentHeight
    }

    // Refresh maximums
    this.__computeScrollMax()

    // Refresh scroll position
    this.scrollTo(this.__scrollLeft, this.__scrollTop, true)
  }
  setPosition = (left: number, top: number) => {
    this.__clientLeft = left || 0
    this.__clientTop = top || 0
  }
  setSnapSize = (width: number, height: number) => {
    this.__snapWidth = width
    this.__snapHeight = height
  }
  getValues = (): StatusValue => ({
    left: this.__scrollLeft,
    top: this.__scrollTop,
    right: this.__scrollLeft + this.__clientWidth / this.__zoomLevel,
    bottom: this.__scrollTop + this.__clientHeight / this.__zoomLevel,
    zoom: this.__zoomLevel
  })
  getPoint = (scrollLeft: number, scrollTop: number): Point => {
    let values = this.getValues()
    return {
      left: scrollLeft / values.zoom,
      top: scrollTop / values.zoom
    }
  }
  getScrollMax = (): Point => ({
    left: this.__maxScrollLeft,
    top: this.__maxScrollTop
  })
  zoomTo = (
    level: number,
    isAnimated: boolean,
    fixedLeft?: number,
    fixedTop?: number,
    callback: Function | null = null
  ) => {
    if (!this.options.zooming) {
      throw new Error('Zooming is not enabled!')
    }

    // Add callback if exists
    if (callback) {
      this.__zoomComplete = callback
    }

    // Stop deceleration
    if (this.__isDecelerating) {
      animate.stop(this.__isDecelerating)
      this.__isDecelerating = false
    }

    let oldLevel = this.__zoomLevel

    // Normalize fixed point to center of viewport if not defined
    if (fixedLeft === undefined) {
      fixedLeft = this.__clientWidth / 2
    }

    if (fixedTop === undefined) {
      fixedTop = this.__clientHeight / 2
    }

    // Limit level according to configuration
    level = Math.max(
      Math.min(level, this.options.maxZoom),
      this.options.minZoom
    )

    // Recompute maximum values while temporary tweaking maximum scroll ranges
    this.__computeScrollMax(level)

    let k = level / oldLevel
    let left = k * (this.__scrollLeft + fixedLeft) - fixedLeft
    let top = k * (this.__scrollTop + fixedTop) - fixedTop

    // Limit x-axis
    if (left > this.__maxScrollLeft) {
      left = this.__maxScrollLeft
    } else if (left < 0) {
      left = 0
    }

    // Limit y-axis
    if (top > this.__maxScrollTop) {
      top = this.__maxScrollTop
    } else if (top < 0) {
      top = 0
    }
    // Push values out
    this.__publish(left, top, level, isAnimated)
  }
  zoomBy = (
    factor: number,
    isAnimated: boolean,
    originLeft: number,
    originTop: number,
    callback: Function
  ) => {
    this.zoomTo(
      this.__zoomLevel * factor,
      isAnimated,
      originLeft,
      originTop,
      callback
    )
  }
  scrollTo = (
    left: number,
    top: number,
    isAnimated: boolean,
    zoom?: number
  ) => {
    // Stop deceleration
    if (this.__isDecelerating) {
      animate.stop(this.__isDecelerating)
      this.__isDecelerating = false
    }

    // Correct coordinates based on new zoom level
    if (zoom !== undefined && zoom !== this.__zoomLevel) {
      if (!this.options.zooming) {
        throw new Error('Zooming is not enabled!')
      }

      left *= zoom
      top *= zoom

      // Recompute maximum values while temporary tweaking maximum scroll ranges
      this.__computeScrollMax(zoom)
    } else {
      // Keep zoom when not defined
      zoom = this.__zoomLevel
    }

    if (!this.options.scrollingX) {
      left = this.__scrollLeft
    } else {
      if (this.options.paging) {
        left = Math.round(left / this.__clientWidth) * this.__clientWidth
      } else if (this.options.snapping) {
        left = Math.round(left / this.__snapWidth) * this.__snapWidth
      }
    }

    if (!this.options.scrollingY) {
      top = this.__scrollTop
    } else {
      if (this.options.paging) {
        top = Math.round(top / this.__clientHeight) * this.__clientHeight
      } else if (this.options.snapping) {
        top = Math.round(top / this.__snapHeight) * this.__snapHeight
      }
    }

    // Limit for allowed ranges
    left = Math.max(Math.min(this.__maxScrollLeft, left), 0)
    top = Math.max(Math.min(this.__maxScrollTop, top), 0)

    // Don't animate when no change detected, still call publish to make sure
    // that rendered position is really in-sync with internal data
    if (left === this.__scrollLeft && top === this.__scrollTop) {
      isAnimated = false
    }

    // Publish new values
    this.__publish(left, top, zoom, isAnimated)
  }
  scrollBy = (left: number, top: number, isAnimated: boolean) => {
    let startLeft = this.__isAnimating
      ? this.__scheduledLeft
      : this.__scrollLeft
    let startTop = this.__isAnimating ? this.__scheduledTop : this.__scrollTop

    this.scrollTo(startLeft + (left || 0), startTop + (top || 0), isAnimated)
  }
  doMouseZoom = (
    wheelDelta: number,
    timeStamp: number,
    pageX: number,
    pageY: number
  ) => {
    let change = wheelDelta > 0 ? 0.97 : 1.03

    return this.zoomTo(
      this.__zoomLevel * change,
      false,
      pageX - this.__clientLeft,
      pageY - this.__clientTop
    )
  }
  doTouchStart = (touches: any[], timeStamp: Date | number) => {
    // Array-like check is enough here
    if (touches.length === undefined) {
      throw new Error('Invalid touch list: ' + touches)
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    // Reset interruptedAnimation flag
    this.__interruptedAnimation = true

    // Stop deceleration
    if (this.__isDecelerating) {
      animate.stop(this.__isDecelerating)
      this.__isDecelerating = false
      this.__interruptedAnimation = true
    }

    // Stop animation
    if (this.__isAnimating) {
      animate.stop(this.__isAnimating)
      this.__isAnimating = false
      this.__interruptedAnimation = true
    }

    // Use center point when dealing with two fingers
    let currentTouchLeft, currentTouchTop
    let isSingleTouch = touches.length === 1
    if (isSingleTouch) {
      currentTouchLeft = touches[0].pageX
      currentTouchTop = touches[0].pageY
    } else {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2
    }

    // Store initial positions
    this.__initialTouchLeft = currentTouchLeft
    this.__initialTouchTop = currentTouchTop

    // Store current zoom level
    this.__zoomLevelStart = this.__zoomLevel

    // Store initial touch positions
    this.__lastTouchLeft = currentTouchLeft
    this.__lastTouchTop = currentTouchTop

    // Store initial move time stamp
    this.__lastTouchMove = timeStamp

    // Reset initial scale
    this.__lastScale = 1

    // Reset locking flags
    this.__enableScrollX = !isSingleTouch && this.options.scrollingX
    this.__enableScrollY = !isSingleTouch && this.options.scrollingY

    // Reset tracking flag
    this.__isTracking = true

    // Reset deceleration complete flag
    this.__didDecelerationComplete = false

    // Dragging starts directly with two fingers, otherwise lazy with an offset
    this.__isDragging = !isSingleTouch

    // Some features are disabled in multi touch scenarios
    this.__isSingleTouch = isSingleTouch

    // Clearing data structure
    this.__positions = []
  }
  doTouchMove = (touches: any[], timeStamp: Date | number, scale: number) => {
    // Array-like check is enough here
    if (touches.length === undefined) {
      throw new Error('Invalid touch list: ' + touches)
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!this.__isTracking) {
      return
    }

    let currentTouchLeft, currentTouchTop

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2
    } else {
      currentTouchLeft = touches[0].pageX
      currentTouchTop = touches[0].pageY
    }

    let positions = this.__positions

    // Are we already is dragging mode?
    if (this.__isDragging) {
      // Compute move distance
      let moveX = currentTouchLeft - this.__lastTouchLeft
      let moveY = currentTouchTop - this.__lastTouchTop

      // Read previous scroll position and zooming
      let scrollLeft = this.__scrollLeft
      let scrollTop = this.__scrollTop
      let level = this.__zoomLevel

      // Work with scaling
      if (scale !== undefined && this.options.zooming) {
        let oldLevel = level

        // Recompute level based on previous scale and new scale
        level = (level / this.__lastScale) * scale

        // Limit level according to configuration
        level = Math.max(
          Math.min(level, this.options.maxZoom),
          this.options.minZoom
        )

        // Only do further compution when change happened
        if (oldLevel !== level) {
          // Compute relative event position to container
          let currentTouchLeftRel = currentTouchLeft - this.__clientLeft
          let currentTouchTopRel = currentTouchTop - this.__clientTop

          // Recompute left and top coordinates based on new zoom level
          scrollLeft =
            ((currentTouchLeftRel + scrollLeft) * level) / oldLevel -
            currentTouchLeftRel
          scrollTop =
            ((currentTouchTopRel + scrollTop) * level) / oldLevel -
            currentTouchTopRel

          // Recompute max scroll values
          this.__computeScrollMax(level)
        }
      }

      if (this.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier
        let maxScrollLeft = this.__maxScrollLeft

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
          // Slow down on the edges
          if (this.options.bouncing) {
            scrollLeft += (moveX / 2) * this.options.speedMultiplier
          } else if (scrollLeft > maxScrollLeft) {
            scrollLeft = maxScrollLeft
          } else {
            scrollLeft = 0
          }
        }
      }

      // Compute new vertical scroll position
      if (this.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier
        let maxScrollTop = this.__maxScrollTop

        if (scrollTop > maxScrollTop || scrollTop < 0) {
          // Slow down on the edges
          if (this.options.bouncing) {
            scrollTop += (moveY / 2) * this.options.speedMultiplier
          } else if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop
          } else {
            scrollTop = 0
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30)
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp)

      // Sync scroll position
      this.__publish(scrollLeft, scrollTop, level)

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      let minimumTrackingForScroll = this.options.locking ? 3 : 0
      let minimumTrackingForDrag = 5

      let distanceX = Math.abs(currentTouchLeft - this.__initialTouchLeft)
      let distanceY = Math.abs(currentTouchTop - this.__initialTouchTop)

      this.__enableScrollX =
        this.options.scrollingX && distanceX >= minimumTrackingForScroll
      this.__enableScrollY =
        this.options.scrollingY && distanceY >= minimumTrackingForScroll

      positions.push(this.__scrollLeft, this.__scrollTop, timeStamp)

      this.__isDragging =
        (this.__enableScrollX || this.__enableScrollY) &&
        (distanceX >= minimumTrackingForDrag ||
          distanceY >= minimumTrackingForDrag)
      if (this.__isDragging) {
        this.__interruptedAnimation = false
      }
    }

    // Update last touch positions and time stamp for next event
    this.__lastTouchLeft = currentTouchLeft
    this.__lastTouchTop = currentTouchTop
    this.__lastTouchMove = timeStamp
    this.__lastScale = scale
  }
  doTouchEnd = (timeStamp: Date | number) => {
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
    if (!this.__isTracking) {
      return
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    this.__isTracking = false

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (this.__isDragging) {
      // Reset dragging flag
      this.__isDragging = false

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (
        this.__isSingleTouch &&
        this.options.animating &&
        timeStamp - this.__lastTouchMove <= 100
      ) {
        // Then figure out what the scroll position was about 100ms ago
        let positions = this.__positions
        let endPos = positions.length - 1
        let startPos = endPos

        // Move pointer to position measured 100ms ago
        for (
          let i = endPos;
          i > 0 && positions[i] > this.__lastTouchMove - 100;
          i -= 3
        ) {
          startPos = i
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          let timeOffset = positions[endPos] - positions[startPos]
          let movedLeft = this.__scrollLeft - positions[startPos - 2]
          let movedTop = this.__scrollTop - positions[startPos - 1]

          // Based on 50ms compute the movement to apply for each render step
          this.__decelerationVelocityX = (movedLeft / timeOffset) * (1000 / 60)
          this.__decelerationVelocityY = (movedTop / timeOffset) * (1000 / 60)

          // How much velocity is required to start the deceleration
          let minVelocityToStartDeceleration =
            this.options.paging || this.options.snapping ? 4 : 1

          // Verify that we have enough velocity to start deceleration
          if (
            Math.abs(this.__decelerationVelocityX) >
              minVelocityToStartDeceleration ||
            Math.abs(this.__decelerationVelocityY) >
              minVelocityToStartDeceleration
          ) {
            this.__startDeceleration(timeStamp)
          }
        } else {
          this.options.scrollingComplete()
        }
      } else if (timeStamp - this.__lastTouchMove > 100) {
        this.options.scrollingComplete()
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!this.__isDecelerating) {
      if (this.__interruptedAnimation || this.__isDragging) {
        this.options.scrollingComplete()
      }
      this.scrollTo(this.__scrollLeft, this.__scrollTop, true, this.__zoomLevel)
    }

    // Fully cleanup list
    this.__positions.length = 0
  }
  protected __publish = (left, top, zoom, isAnimated?: boolean) => {
    // Remember whether we had an animation, then we try to continue
    // based on the current "drive" of the animation.
    let wasAnimating = this.__isAnimating
    if (wasAnimating) {
      animate.stop(wasAnimating)
      this.__isAnimating = false
    }

    if (isAnimated && this.options.animating) {
      // Keep scheduled positions for scrollBy/zoomBy functionality.
      this.__scheduledLeft = left
      this.__scheduledTop = top
      this.__scheduledZoom = zoom

      let oldLeft = this.__scrollLeft
      let oldTop = this.__scrollTop
      let oldZoom = this.__zoomLevel

      let diffLeft = left - oldLeft
      let diffTop = top - oldTop
      let diffZoom = zoom - oldZoom

      let step = function(percent, now, render) {
        if (render) {
          this.__scrollLeft = oldLeft + diffLeft * percent
          this.__scrollTop = oldTop + diffTop * percent
          this.__zoomLevel = oldZoom + diffZoom * percent

          // Push values out
          if (this.__callback) {
            this.__callback(
              this.__scrollLeft,
              this.__scrollTop,
              this.__zoomLevel
            )
          }
        }
      }.bind(this)

      let verify = function(id) {
        return this.__isAnimating === id
      }.bind(this)

      let completed = function(
        renderedFramesPerSecond,
        animationId,
        wasFinished
      ) {
        if (animationId === this.__isAnimating) {
          this.__isAnimating = false
        }
        if (this.__didDecelerationComplete || wasFinished) {
          this.options.scrollingComplete()
        }

        if (this.options.zooming) {
          this.__computeScrollMax()
          if (this.__zoomComplete) {
            this.__zoomComplete()
            this.__zoomComplete = null
          }
        }
      }.bind(this)

      // When continuing based on previous animation we choose an ease-out animation instead of ease-in-out
      this.__isAnimating = animate.start(
        step,
        verify,
        completed,
        this.options.animationDuration,
        wasAnimating ? easeOutCubic : easeInOutCubic
      )
    } else {
      this.__scheduledLeft = this.__scrollLeft = left
      this.__scheduledTop = this.__scrollTop = top
      this.__scheduledZoom = this.__zoomLevel = zoom

      // Push values out
      if (this.__callback) {
        this.__callback(left, top, zoom)
      }

      // Fix max scroll ranges
      if (this.options.zooming) {
        this.__computeScrollMax()
        if (this.__zoomComplete) {
          this.__zoomComplete()
          this.__zoomComplete = null
        }
      }
    }
  }
  protected __computeScrollMax = (zoomLevel?: number) => {
    if (zoomLevel === undefined) {
      zoomLevel = this.__zoomLevel
    }

    this.__maxScrollLeft = Math.max(
      this.__contentWidth * zoomLevel - this.__clientWidth,
      0
    )
    this.__maxScrollTop = Math.max(
      this.__contentHeight * zoomLevel - this.__clientHeight,
      0
    )
  }
  protected __startDeceleration = timeStamp => {
    if (this.options.paging) {
      let scrollLeft = Math.max(
        Math.min(this.__scrollLeft, this.__maxScrollLeft),
        0
      )
      let scrollTop = Math.max(
        Math.min(this.__scrollTop, this.__maxScrollTop),
        0
      )
      let clientWidth = this.__clientWidth
      let clientHeight = this.__clientHeight

      // We limit deceleration not to the min/max values of the allowed range, but to the size of the visible client area.
      // Each page should have exactly the size of the client area.
      this.__minDecelerationScrollLeft =
        Math.floor(scrollLeft / clientWidth) * clientWidth
      this.__minDecelerationScrollTop =
        Math.floor(scrollTop / clientHeight) * clientHeight
      this.__maxDecelerationScrollLeft =
        Math.ceil(scrollLeft / clientWidth) * clientWidth
      this.__maxDecelerationScrollTop =
        Math.ceil(scrollTop / clientHeight) * clientHeight
    } else {
      this.__minDecelerationScrollLeft = 0
      this.__minDecelerationScrollTop = 0
      this.__maxDecelerationScrollLeft = this.__maxScrollLeft
      this.__maxDecelerationScrollTop = this.__maxScrollTop
    }

    // Wrap class method
    let step = function(percent, now, render) {
      this.__stepThroughDeceleration(render)
    }.bind(this)

    // How much velocity is required to keep the deceleration running
    let minVelocityToKeepDecelerating = this.options.snapping ? 4 : 0.1

    // Detect whether it's still worth to continue animating steps
    // If we are already slow enough to not being user perceivable anymore, we stop the whole process here.
    let verify = function() {
      let shouldContinue =
        Math.abs(this.__decelerationVelocityX) >=
          minVelocityToKeepDecelerating ||
        Math.abs(this.__decelerationVelocityY) >= minVelocityToKeepDecelerating
      if (!shouldContinue) {
        this.__didDecelerationComplete = true
      }
      return shouldContinue
    }.bind(this)

    let completed = function(
      renderedFramesPerSecond,
      animationId,
      wasFinished
    ) {
      this.__isDecelerating = false
      if (this.__didDecelerationComplete) {
        this.options.scrollingComplete()
      }

      // Animate to grid when snapping is active, otherwise just fix out-of-boundary positions
      this.scrollTo(this.__scrollLeft, this.__scrollTop, this.options.snapping)
    }.bind(this)

    // Start animation and switch on flag
    this.__isDecelerating = animate.start(step, verify, completed)
  }
  protected __stepThroughDeceleration = render => {
    //
    // COMPUTE NEXT SCROLL POSITION
    //

    // Add deceleration to scroll position
    let scrollLeft = this.__scrollLeft + this.__decelerationVelocityX
    let scrollTop = this.__scrollTop + this.__decelerationVelocityY

    //
    // HARD LIMIT SCROLL POSITION FOR NON BOUNCING MODE
    //

    if (!this.options.bouncing) {
      let scrollLeftFixed = Math.max(
        Math.min(this.__maxDecelerationScrollLeft, scrollLeft),
        this.__minDecelerationScrollLeft
      )
      if (scrollLeftFixed !== scrollLeft) {
        scrollLeft = scrollLeftFixed
        this.__decelerationVelocityX = 0
      }

      let scrollTopFixed = Math.max(
        Math.min(this.__maxDecelerationScrollTop, scrollTop),
        this.__minDecelerationScrollTop
      )
      if (scrollTopFixed !== scrollTop) {
        scrollTop = scrollTopFixed
        this.__decelerationVelocityY = 0
      }
    }

    //
    // UPDATE SCROLL POSITION
    //

    if (render) {
      this.__publish(scrollLeft, scrollTop, this.__zoomLevel)
    } else {
      this.__scrollLeft = scrollLeft
      this.__scrollTop = scrollTop
    }

    //
    // SLOW DOWN
    //

    // Slow down velocity on every iteration
    if (!this.options.paging) {
      // This is the factor applied to every iteration of the animation
      // to slow down the process. This should emulate natural behavior where
      // objects slow down when the initiator of the movement is removed
      let frictionFactor = 0.95

      this.__decelerationVelocityX *= frictionFactor
      this.__decelerationVelocityY *= frictionFactor
    }

    //
    // BOUNCING SUPPORT
    //

    if (this.options.bouncing) {
      let scrollOutsideX = 0
      let scrollOutsideY = 0

      // This configures the amount of change applied to deceleration/acceleration when reaching boundaries
      let penetrationDeceleration = this.options.penetrationDeceleration
      let penetrationAcceleration = this.options.penetrationAcceleration

      // Check limits
      if (scrollLeft < this.__minDecelerationScrollLeft) {
        scrollOutsideX = this.__minDecelerationScrollLeft - scrollLeft
      } else if (scrollLeft > this.__maxDecelerationScrollLeft) {
        scrollOutsideX = this.__maxDecelerationScrollLeft - scrollLeft
      }

      if (scrollTop < this.__minDecelerationScrollTop) {
        scrollOutsideY = this.__minDecelerationScrollTop - scrollTop
      } else if (scrollTop > this.__maxDecelerationScrollTop) {
        scrollOutsideY = this.__maxDecelerationScrollTop - scrollTop
      }

      // Slow down until slow enough, then flip back to snap position
      if (scrollOutsideX !== 0) {
        if (scrollOutsideX * this.__decelerationVelocityX <= 0) {
          this.__decelerationVelocityX +=
            scrollOutsideX * penetrationDeceleration
        } else {
          this.__decelerationVelocityX =
            scrollOutsideX * penetrationAcceleration
        }
      }

      if (scrollOutsideY !== 0) {
        if (scrollOutsideY * this.__decelerationVelocityY <= 0) {
          this.__decelerationVelocityY +=
            scrollOutsideY * penetrationDeceleration
        } else {
          this.__decelerationVelocityY =
            scrollOutsideY * penetrationAcceleration
        }
      }
    }
  }
}
//scroller advented from https://github.com/wangdahoo/vue-scroller
export class AdvScroller extends Scroller {
  protected __refreshHeight: number = -1
  protected __refreshActive: boolean = false
  protected __refreshActivate: Function = () => {}
  protected __refreshDeactivate: Function = () => {}
  protected __refreshStart: Function | null = null
  triggerPullToRefresh = () => {
    // Use publish instead of scrollTo to allow scrolling to out of boundary position
    // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
    this.__publish(
      this.__scrollLeft,
      -this.__refreshHeight,
      this.__zoomLevel,
      true
    )
    if (this.__refreshStart) {
      this.__refreshStart()
    }
  }
  activatePullToRefresh = (
    height: number,
    activateCallback: Function,
    deactivateCallback: Function,
    startCallback: Function
  ) => {
    this.__refreshHeight = height
    this.__refreshActivate = activateCallback
    this.__refreshDeactivate = deactivateCallback
    this.__refreshStart = startCallback
  }
  finishPullToRefresh = () => {
    this.__refreshActive = false
    if (this.__refreshDeactivate) {
      this.__refreshDeactivate()
    }

    this.scrollTo(this.__scrollLeft, this.__scrollTop, true)
  }
  getScrollMax = (): Point => ({
    left: this.__maxScrollLeft,
    top: this.__maxScrollTop
  })
  doTouchMove = (touches: any[], timeStamp: Date | number, scale?: number) => {
    // Array-like check is enough here
    if (touches.length == null) {
      throw new Error('Invalid touch list: ' + touches)
    }

    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    let self = this

    // Ignore event when tracking is not enabled (event might be outside of element)
    if (!self.__isTracking) {
      return
    }

    let currentTouchLeft, currentTouchTop

    // Compute move based around of center of fingers
    if (touches.length === 2) {
      currentTouchLeft = Math.abs(touches[0].pageX + touches[1].pageX) / 2
      currentTouchTop = Math.abs(touches[0].pageY + touches[1].pageY) / 2
    } else {
      currentTouchLeft = touches[0].pageX
      currentTouchTop = touches[0].pageY
    }

    let positions = self.__positions

    // Are we already is dragging mode?
    if (self.__isDragging) {
      // Compute move distance
      let moveX = currentTouchLeft - self.__lastTouchLeft
      let moveY = currentTouchTop - self.__lastTouchTop

      // Read previous scroll position and zooming
      let scrollLeft = self.__scrollLeft
      let scrollTop = self.__scrollTop
      let level = self.__zoomLevel

      // Work with scaling
      if (scale != null && self.options.zooming) {
        let oldLevel = level

        // Recompute level based on previous scale and new scale
        level = (level / self.__lastScale) * scale

        // Limit level according to configuration
        level = Math.max(
          Math.min(level, self.options.maxZoom),
          self.options.minZoom
        )

        // Only do further compution when change happened
        if (oldLevel !== level) {
          // Compute relative event position to container
          let currentTouchLeftRel = currentTouchLeft - self.__clientLeft
          let currentTouchTopRel = currentTouchTop - self.__clientTop

          // Recompute left and top coordinates based on new zoom level
          scrollLeft =
            ((currentTouchLeftRel + scrollLeft) * level) / oldLevel -
            currentTouchLeftRel
          scrollTop =
            ((currentTouchTopRel + scrollTop) * level) / oldLevel -
            currentTouchTopRel

          // Recompute max scroll values
          self.__computeScrollMax(level)
        }
      }

      if (self.__enableScrollX) {
        scrollLeft -= moveX * this.options.speedMultiplier
        let maxScrollLeft = self.__maxScrollLeft

        if (scrollLeft > maxScrollLeft || scrollLeft < 0) {
          // Slow down on the edges
          if (self.options.bouncing) {
            scrollLeft += (moveX / 2) * this.options.speedMultiplier
          } else if (scrollLeft > maxScrollLeft) {
            scrollLeft = maxScrollLeft
          } else {
            scrollLeft = 0
          }
        }
      }

      // Compute new vertical scroll position
      if (self.__enableScrollY) {
        scrollTop -= moveY * this.options.speedMultiplier
        let maxScrollTop = self.__maxScrollTop

        if (scrollTop > maxScrollTop || scrollTop < 0) {
          // Slow down on the edges
          if (self.options.bouncing) {
            scrollTop += (moveY / 2) * this.options.speedMultiplier

            // Support pull-to-refresh (only when only y is scrollable)
            if (!self.__enableScrollX && self.__refreshHeight != null) {
              if (!self.__refreshActive && scrollTop <= -self.__refreshHeight) {
                self.__refreshActive = true
                if (self.__refreshActivate) {
                  self.__refreshActivate()
                }
              } else if (
                self.__refreshActive &&
                scrollTop > -self.__refreshHeight
              ) {
                self.__refreshActive = false
                if (self.__refreshDeactivate) {
                  self.__refreshDeactivate()
                }
              }
            }
          } else if (scrollTop > maxScrollTop) {
            scrollTop = maxScrollTop
          } else {
            scrollTop = 0
          }
        }
      }

      // Keep list from growing infinitely (holding min 10, max 20 measure points)
      if (positions.length > 60) {
        positions.splice(0, 30)
      }

      // Track scroll movement for decleration
      positions.push(scrollLeft, scrollTop, timeStamp)

      // Sync scroll position
      self.__publish(scrollLeft, scrollTop, level)

      // Otherwise figure out whether we are switching into dragging mode now.
    } else {
      let minimumTrackingForScroll = self.options.locking ? 3 : 0
      let minimumTrackingForDrag = 5

      let distanceX = Math.abs(currentTouchLeft - self.__initialTouchLeft)
      let distanceY = Math.abs(currentTouchTop - self.__initialTouchTop)

      self.__enableScrollX =
        self.options.scrollingX && distanceX >= minimumTrackingForScroll
      self.__enableScrollY =
        self.options.scrollingY && distanceY >= minimumTrackingForScroll

      positions.push(self.__scrollLeft, self.__scrollTop, timeStamp)

      self.__isDragging =
        (self.__enableScrollX || self.__enableScrollY) &&
        (distanceX >= minimumTrackingForDrag ||
          distanceY >= minimumTrackingForDrag)
      if (self.__isDragging) {
        self.__interruptedAnimation = false
      }
    }

    // Update last touch positions and time stamp for next event
    self.__lastTouchLeft = currentTouchLeft
    self.__lastTouchTop = currentTouchTop
    self.__lastTouchMove = timeStamp
    self.__lastScale = scale ? scale : 1
  }
  doTouchEnd = (timeStamp: Date | number) => {
    if (timeStamp instanceof Date) {
      timeStamp = timeStamp.valueOf()
    }
    if (typeof timeStamp !== 'number') {
      throw new Error('Invalid timestamp value: ' + timeStamp)
    }

    let self = this

    // Ignore event when tracking is not enabled (no touchstart event on element)
    // This is required as this listener ('touchmove') sits on the document and not on the element itself.
    if (!self.__isTracking) {
      return
    }

    // Not touching anymore (when two finger hit the screen there are two touch end events)
    self.__isTracking = false

    // Be sure to reset the dragging flag now. Here we also detect whether
    // the finger has moved fast enough to switch into a deceleration animation.
    if (self.__isDragging) {
      // Reset dragging flag
      self.__isDragging = false

      // Start deceleration
      // Verify that the last move detected was in some relevant time frame
      if (
        self.__isSingleTouch &&
        self.options.animating &&
        timeStamp - self.__lastTouchMove <= 100
      ) {
        // Then figure out what the scroll position was about 100ms ago
        let positions = self.__positions
        let endPos = positions.length - 1
        let startPos = endPos

        // Move pointer to position measured 100ms ago
        for (
          let i = endPos;
          i > 0 && positions[i] > self.__lastTouchMove - 100;
          i -= 3
        ) {
          startPos = i
        }

        // If start and stop position is identical in a 100ms timeframe,
        // we cannot compute any useful deceleration.
        if (startPos !== endPos) {
          // Compute relative movement between these two points
          let timeOffset = positions[endPos] - positions[startPos]
          let movedLeft = self.__scrollLeft - positions[startPos - 2]
          let movedTop = self.__scrollTop - positions[startPos - 1]

          // Based on 50ms compute the movement to apply for each render step
          self.__decelerationVelocityX = (movedLeft / timeOffset) * (1000 / 60)
          self.__decelerationVelocityY = (movedTop / timeOffset) * (1000 / 60)

          // How much velocity is required to start the deceleration
          let minVelocityToStartDeceleration =
            self.options.paging || self.options.snapping ? 4 : 1

          // Verify that we have enough velocity to start deceleration
          if (
            Math.abs(self.__decelerationVelocityX) >
              minVelocityToStartDeceleration ||
            Math.abs(self.__decelerationVelocityY) >
              minVelocityToStartDeceleration
          ) {
            // Deactivate pull-to-refresh when decelerating
            if (!self.__refreshActive) {
              self.__startDeceleration(timeStamp)
            }
          } else {
            self.options.scrollingComplete()
          }
        } else {
          self.options.scrollingComplete()
        }
      } else if (timeStamp - self.__lastTouchMove > 100) {
        self.options.scrollingComplete()
      }
    }

    // If this was a slower move it is per default non decelerated, but this
    // still means that we want snap back to the bounds which is done here.
    // This is placed outside the condition above to improve edge case stability
    // e.g. touchend fired without enabled dragging. This should normally do not
    // have modified the scroll positions or even showed the scrollbars though.
    if (!self.__isDecelerating) {
      if (self.__refreshActive && self.__refreshStart) {
        // Use publish instead of scrollTo to allow scrolling to out of boundary position
        // We don't need to normalize scrollLeft, zoomLevel, etc. here because we only y-scrolling when pull-to-refresh is enabled
        self.__publish(
          self.__scrollLeft,
          -self.__refreshHeight,
          self.__zoomLevel,
          true
        )

        if (self.__refreshStart) {
          self.__refreshStart()
        }
      } else {
        if (self.__interruptedAnimation || self.__isDragging) {
          self.options.scrollingComplete()
        }
        self.scrollTo(
          self.__scrollLeft,
          self.__scrollTop,
          true,
          self.__zoomLevel
        )

        // Directly signalize deactivation (nothing todo on refresh?)
        if (self.__refreshActive) {
          self.__refreshActive = false
          if (self.__refreshDeactivate) {
            self.__refreshDeactivate()
          }
        }
      }
    }

    // Fully cleanup list
    self.__positions.length = 0
  }
}
export interface StatusValue {
  left: number
  top: number
  right: number
  bottom: number
  zoom: number
}
export interface Point {
  left: number
  top: number
}
