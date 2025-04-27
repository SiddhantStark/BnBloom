import icons from '@/lib/icons.tsx'

const Icon = ({icon, ...props}) => {
  const IconComponent = icons[icon];
  return <IconComponent {...props}/>
}

export default Icon;