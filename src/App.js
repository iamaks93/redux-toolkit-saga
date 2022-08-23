import './App.css';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCatsFetch} from './feature/cat/catSlice';

function App() {
    const offSetIncrementBy = 10;
    const [offset, setOffset] = useState(offSetIncrementBy);
    const catList = useSelector(state => state.cats.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsFetch());
    }, [dispatch]);

    useEffect(() => {
        console.log('Current offset is '+ offset);
    }, [offset]);

    const viewMore = () => {
        setOffset(offset + offSetIncrementBy);
    }
    return (
        <div className="App">
            <h1>CAT SPECIES GALLERY</h1>
            <p>Images of different species of cats. Lots of cats for your viewing pleasure.</p>
            <hr/>
            <div className="Gallery">
                {catList.slice(0, offset).map(cat =>
                    <div key={cat.id} className='row'>
                        <div className='column'>
                            <img src={cat?.image?.url} alt={cat.name} width={200} height={200} loading="lazy"/>
                        </div>
                        <div className='column column-right'>
                            <h2>{cat.name}</h2>
                            <h5>Temperament : {cat.temperament}</h5>
                            <p>{cat.description}</p>
                        </div>
                    </div>
                )}
            </div>
            {catList.length >= offset &&
                <button onClick={(e) => viewMore(e)}>VIEW MORE</button>
            }
        </div>
    );
}

export default App;
