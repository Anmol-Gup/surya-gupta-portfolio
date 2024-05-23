interface PersonalInfoProps {
    title: string;
    text: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ title, text }) => {
    return (<div className={`${title} md:pb-3 pb-2`}>
        <p className='text-gray-300'>{title}</p>
        <p className='font-medium text-pretty'>{text}</p>
    </div>)
}
export default PersonalInfo