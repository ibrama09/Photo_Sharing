const Banner = ({photo}) => {
    return (
        <div>
            <h2>Banner</h2>
            {
            photo.map((assets) => {
                return (
                    <div>
                        <h3>{assets}</h3>
                        <image src={assets}/>
                    </div>
                );
            })}
        </div>
    );
};
export default Banner;