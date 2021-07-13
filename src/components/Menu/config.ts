import { MenuEntry } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Prediction (BETA)'),
    icon: 'PredictionsIcon',
    href: '/',
  },  
]

export default config
