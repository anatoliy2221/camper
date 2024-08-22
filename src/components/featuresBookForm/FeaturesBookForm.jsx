import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn"

const FeaturesBookForm = () => {
    return (
        <div>
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
            <form>
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <input type="data" name="data" placeholder="Booking date" />
                <textarea name="data" placeholder="Comment" />
                <LoadMoreBtn>Send</LoadMoreBtn>
            </form>


        </div>
    )
}

export default FeaturesBookForm;
