<template lang="pug">
 v-dialog(v-model='display', lazy, full-width, :width='width', :disabled='disabled||readonly')
  v-text-field(v-if="dataVvName",slot='activator', :label='label', :value='formattedDatetime', :disabled='disabled',
  :data-vv-name="dataVvName",:data-vv-as="dataVvAs",v-validate="validateRule",:error-messages="errorMessages",:key="new Date().getTime()+'v-date-time-picker'"
  readonly)
  v-text-field(v-else,slot='activator', :label='label', :value='formattedDatetime', :disabled='disabled',:key="new Date().getTime()+'v-date-time-picker'",readonly)
  v-card
    v-card-text().pa-0
      v-tabs(fixed-tabs, v-model='activeTab')
        v-tab(key='calendar')
          slot(name='dateIcon')
            v-icon mdi-calendar-text
        v-tab(key='timer', :disabled='!dateSelected')
          slot(name='timeIcon')
            v-icon mdi-clock-outline
        v-tab-item(key='calendar')
          v-date-picker(full-width, v-model='datePart', scrollable, :locale='locale', actions)
        v-tab-item(key='timer')
          v-time-picker.v-time-picker-custom(ref='timer', full-width, v-model='timePart', scrollable, :format='timePickerFormat', actions)
    v-card-actions
      v-spacer
      slot(name='actions', :parent='this')
        v-btn(color='grey lighten-1', flat, @click.native='clearHandler') {{clearText}}
        v-btn(color='green darken-1', flat, @click='okHandler') {{okText}}
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch, namespace, Model } from "nuxt-property-decorator";
export const DEFAULT_DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm'
export const DEFAULT_DATE_FORMAT = 'YYYY-MM-DD'
export const DEFAULT_TIME_FORMAT = 'HH:mm'
const DEFAULT_TIME = '00:00'

@Component({
  name: 'VDatetimePicker',
})
export default class VDatetimePicker extends Vue {
  @Model('input', { type: [Date, String], default: null }) datetime
  @Prop({ type: String, default: '' }) label!: string
  @Prop({ type: Number, default: 360 }) width!: number
  @Prop({ type: String, default: 'YYYY-MM-DD HH:mm:ss' }) format!: string
  @Prop({ type: String, default: '24hr' }) timePickerFormat!: string
  @Prop({ type: String, default: 'zh-cn' }) locale!: string
  @Prop({ type: String, default: '清空' }) clearText!: string
  @Prop({ type: String, default: '确定' }) okText!: string
  @Prop({ type: Boolean, default: false }) disabled!: boolean
  @Prop({ type: Boolean, default: false }) readonly!: boolean
  @Prop() errorMessages!: any
  @Prop() validateRule!: any
  @Prop() dataVvAs!: any
  @Prop() dataVvName!: any
  $refs!: {
    timer: any
  }
  display: boolean = false
  dateSelected: boolean = false
  timeSelected: boolean = false
  activeTab: number = 0
  selectedDatetime: any = null

  created() {
    if (this.datetime instanceof Date) {
      this.selectedDatetime = this.datetime
    } else if (this.datetime instanceof String) {
      this.selectedDatetime = this.$moment(this.datetime, this.format)
    }
  }
  get formattedDatetime() {
    return this.datetime ? this.$moment(this.datetime).format(this.format) : ''
  }
  get timePart() {
    return this.selectedDatetime ? this.$moment(this.selectedDatetime).format(DEFAULT_TIME_FORMAT) : DEFAULT_TIME
  }
  set timePart(val) {
    this.timeSelected = true
    let time = this.$moment(val, DEFAULT_TIME_FORMAT)
    let input = this.$moment(this.selectedDatetime).hour(time.hour()).minute(time.minute()).second(0)
    this.selectedDatetime = input.toDate()
  }
  get datePart() {
    return this.selectedDatetime ? this.$moment(this.selectedDatetime).format(DEFAULT_DATE_FORMAT) : ''
  }
  set datePart(val) {
    this.dateSelected = true
    this.activeTab = 1
    let date = this.$moment(val, DEFAULT_DATE_FORMAT)
    let hour = this.selectedDatetime ? this.$moment(this.selectedDatetime).hour() : 0
    let minute = this.selectedDatetime ? this.$moment(this.selectedDatetime).minute() : 0
    let input = this.$moment().year(date.year()).month(date.month()).date(date.date()).hour(hour).minute(minute).second(0)
    this.selectedDatetime = input.toDate()
  }
  okHandler() {
    this.display = false
    this.activeTab = 0
    this.$refs.timer.selectingHour = true
    this.$emit('input', this.selectedDatetime)
  }
  clearHandler() {
    this.display = false
    this.activeTab = 0
    this.$refs.timer.selectingHour = true
    this.$emit('input', null)
  }
}
</script>
