import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    const handleCardClick = (item) => {
        setShow(true);
        setItem(item);
    };

    return (
        <>
            {book.map((item, index) => {
                const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
                const amount = item.saleInfo.listPrice?.amount;

                if (thumbnail && amount) {
                    return (
                        <div
                            key={item.id || index} // Prefer a unique property like `id` or fallback to `index`
                            className="card"
                            onClick={() => handleCardClick(item)}
                        >
                            <img src={thumbnail} alt={item.volumeInfo.title} />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                        </div>
                    );
                }
                return null;
            })}

            {show && bookItem && (
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            )}
        </>
    );
};

export default Card;
