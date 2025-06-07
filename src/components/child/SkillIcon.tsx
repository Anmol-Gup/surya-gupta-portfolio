interface SkillIconProp{
    Icon:React.ElementType
}

const SkillIcon: React.FC<SkillIconProp> = ({Icon}) => {
    return (<><Icon className="text-5xl md:text-6xl text-white" />
    </>)
}

export default SkillIcon
