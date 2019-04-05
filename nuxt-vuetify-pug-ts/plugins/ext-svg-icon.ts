import Vue, { PluginFunction } from 'vue'

/* #region Vuetify */
import MdiCheck from '@mdi/svg/svg/check.svg'
import MdiCloseCircle from '@mdi/svg/svg/close-circle.svg'
import MdiClose from '@mdi/svg/svg/close.svg'
import MdiCheckCircle from '@mdi/svg/svg/check-circle.svg'
import MdiInformation from '@mdi/svg/svg/information.svg'
import MdiExclamation from '@mdi/svg/svg/exclamation.svg'
import MdiAlert from '@mdi/svg/svg/alert.svg'
import MdiChevronRight from '@mdi/svg/svg/chevron-right.svg'
import MdiChevronLeft from '@mdi/svg/svg/chevron-left.svg'
import MdiCheckboxMarked from '@mdi/svg/svg/checkbox-marked.svg'
import MdiCheckboxBlankOutline from '@mdi/svg/svg/checkbox-blank-outline.svg'
import MdiMinusBox from '@mdi/svg/svg/minus-box.svg'
import MdiCircle from '@mdi/svg/svg/circle.svg'
import MdiArrowUp from '@mdi/svg/svg/arrow-up.svg'
import MdiChevronDown from '@mdi/svg/svg/chevron-down.svg'
import MdiMenu from '@mdi/svg/svg/menu.svg'
import MdiMenuDown from '@mdi/svg/svg/menu-down.svg'
import MdiRadioBoxMarked from '@mdi/svg/svg/radiobox-marked.svg'
import MdiRadioBoxBlank from '@mdi/svg/svg/radiobox-blank.svg'
import MdiPencil from '@mdi/svg/svg/pencil.svg'
import MdiStarOutline from '@mdi/svg/svg/star-outline.svg'
import MdiStar from '@mdi/svg/svg/star.svg'
import MdiStarHalf from '@mdi/svg/svg/star-half.svg'
/* #endregion */
/* #region Vuetify */
export const MDI_SVG = {
  complete: { component: MdiCheck },
  cancel: { component: MdiCloseCircle },
  close: { component: MdiClose },
  delete: { component: MdiCloseCircle },
  clear: { component: MdiClose },
  success: { component: MdiCheckCircle },
  info: { component: MdiInformation },
  warning: { component: MdiExclamation },
  error: { component: MdiAlert },
  prev: { component: MdiChevronLeft },
  next: { component: MdiChevronRight },
  checkboxOn: { component: MdiCheckboxMarked },
  checkboxOff: { component: MdiCheckboxBlankOutline },
  checkboxIndeterminate: { component: MdiMinusBox },
  delimiter: { component: MdiCircle },
  sort: { component: MdiArrowUp },
  expand: { component: MdiChevronDown },
  menu: { component: MdiMenu },
  subgroup: { component: MdiMenuDown },
  dropdown: { component: MdiMenuDown },
  radioOn: { component: MdiRadioBoxMarked },
  radioOff: { component: MdiRadioBoxBlank },
  edit: { component: MdiPencil },
  ratingEmpty: { component: MdiStarOutline },
  ratingFull: { component: MdiStar },
  ratingHalf: { component: MdiStarHalf }
}
/* #endregion */

import MdiBrightness6 from '@mdi/svg/svg/brightness-6.svg'
import MdiPackageVariant from '@mdi/svg/svg/package-variant.svg'
import MdiAccessPoint from '@mdi/svg/svg/access-point.svg'
import MdiAccountAlert from '@mdi/svg/svg/account-alert.svg'
import MdiMonitorDashboard from '@mdi/svg/svg/monitor-dashboard.svg'
import MdiNewspaper from '@mdi/svg/svg/newspaper.svg'
import MdiChartScatterplotHexbin from '@mdi/svg/svg/chart-scatterplot-hexbin.svg'
import MdiSettings from '@mdi/svg/svg/settings.svg'
import MdiAlphaDBox from '@mdi/svg/svg/alpha-d-box.svg'
import MdiAccount from '@mdi/svg/svg/account.svg'
import MdiMagnify from '@mdi/svg/svg/magnify.svg'
import MdiFolderAccountOutline from '@mdi/svg/svg/folder-account-outline.svg'
import MdiEye from '@mdi/svg/svg/eye.svg'
import MdiEyeOff from '@mdi/svg/svg/eye-off.svg'
import MdiExitToApp from '@mdi/svg/svg/exit-to-app.svg'

const icons: PluginFunction<any> = (vue, opt) => {
  const ico = {
    MdiEyeOff,
    MdiExitToApp,
    MdiEye,
    MdiFolderAccountOutline,
    MdiMagnify,
    MdiAccount,
    MdiBrightness6,
    MdiAccessPoint,
    MdiAccountAlert,
    MdiMonitorDashboard,
    MdiNewspaper,
    MdiChartScatterplotHexbin,
    MdiSettings,
    MdiCheck,
    MdiCloseCircle,
    MdiClose,
    MdiCheckCircle,
    MdiInformation,
    MdiExclamation,
    MdiAlert,
    MdiChevronRight,
    MdiChevronLeft,
    MdiCheckboxMarked,
    MdiCheckboxBlankOutline,
    MdiMinusBox,
    MdiCircle,
    MdiArrowUp,
    MdiChevronDown,
    MdiMenu,
    MdiMenuDown,
    MdiRadioBoxMarked,
    MdiRadioBoxBlank,
    MdiPencil,
    MdiStarOutline,
    MdiStar,
    MdiStarHalf,
    MdiPackageVariant,
    MdiAlphaDBox
  }
  Object.keys(ico).forEach(k => Vue.component(k, ico[k]))
}
Vue.use(icons)
