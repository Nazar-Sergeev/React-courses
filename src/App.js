import {Cats, Dogs, FormCat, FormDog} from "./components";

export default function App() {
    return (
        <div>
            <div style={{display:'flex', justifyContent: 'space-around'}}>
                <FormCat/>
                <FormDog/>
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Cats/>
                <Dogs/>
            </div>
        </div>    
    );
}