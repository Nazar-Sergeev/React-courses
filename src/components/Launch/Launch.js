import './Launch.css'


export default function Launch({item}) {

    return (
        <div className={'block_ship'}>
            <div>
                <h4>{item.mission_name}</h4>
                <p>{item.launch_year}</p>
            </div>
            <img src={item.links.mission_patch_small} alt="mission_patch"/>
        </div>
    );
};