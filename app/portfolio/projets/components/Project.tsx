// import css for the component
import './Project.css';
import Image from 'next/image';

export default function Project(_props: any) {

    return (
        <div id={_props.id} className='project'>
            <h2 className='project-title'>{_props.title}</h2>
            <div className='project-content'>
                <div className='img-wrapper'>
                    <Image src={_props.img} alt={_props.title} fill={true} className='object-scale-down' />
                </div>
                <div className='text-wrapper'>
                    <h3 className='project-title-description'>{_props.title_desc}</h3>
                    <p className='project-description'>{_props.description}</p>
                </div>
            </div>
        </div>
    );
}