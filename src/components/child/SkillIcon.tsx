interface SkillIconProp{
    level:string;
    Icon:React.ElementType
}

const SkillIcon: React.FC<SkillIconProp> = ({Icon, level}) => {
    return (<><Icon className="text-5xl md:text-6xl text-white" />
        <p>{level}</p>
    </>)
}

export default SkillIcon