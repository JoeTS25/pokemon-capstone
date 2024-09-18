import React from "react";

function Page({ goNextPage, goPrevPage }) {
    return (
        <div className="buttons">
            {goPrevPage && <button className="button-left" onClick={goPrevPage}>Previous</button>}
            {goNextPage && <button className="button-right" onClick={goNextPage}>Next</button>}
        </div>
    )
}

export default Page;