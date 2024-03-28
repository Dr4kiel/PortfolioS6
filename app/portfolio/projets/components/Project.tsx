// import css for the component
import './Project.css';
import Image from 'next/image';

export default function Project(_props: any) {

    let generateID = () => {
        // create an ID for the object based on the title => remove spaces and lowercase
        return _props.title.replace(/\s/g, '').toLowerCase();
    }

    return (
        <div id={generateID()} className='project bg-blue-500'>
            <h2 className='project-title'>{_props.title}</h2>
            <div className='project-content'>
                <div className='img-wrapper'>
                    <Image src={_props.img} alt={_props.title} fill={true} className='object-contain' />
                </div>
                <div className='text-wrapper'>
                    <h3 className='project-description'>{_props.title_desc}</h3>
                    <p className='project-description'>{_props.description}</p>
                </div>
            </div>
        </div>
    );
}