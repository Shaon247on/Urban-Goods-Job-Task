import ReactSlider from 'react-slider';
import './component.css'
const PriceRange = ({ value, setValue }) => {

    return (
        <>
            <h1 className='text-xl font-semibold mb-3 mt-8'>Price Range</h1>
            <div className='flex items-center gap-2 justify-center mb-1 text-lg '>
                <h1>Min: ${value[0]}</h1>
                <h1>-</h1>
                <h1>Max: ${value[1]}</h1>
            </div>
            <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[19.99, 699.99]}
                max={699.99}
                min={19.99}                
                onChange={(value, index) => setValue(value)}
            />

        </>
    );
};

export default PriceRange;