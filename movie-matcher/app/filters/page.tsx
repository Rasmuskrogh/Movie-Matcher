import React from "react";

const filters = () => {
  return (
    <>
      <div className="bg-slate-800 text-white p-2 w-100% h-[550px]">
        {/* <h1>Filters</h1>
        <p>Page under construction</p> */}

        <h2 className="text-xl text-center py-4">Filter by Genres</h2>

        <div className="grid grid-cols-2">
          <form action="">
            <h3 className="text-lg pb-1">Included:</h3>
            <div>
              <input type="checkbox" checked className="mr-2" />
              <label>All</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Action</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Adventure</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Animated</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Biography</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Comedy</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Documentary</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Drama</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Fantasy</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Horror</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Mystery</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Romance</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Sci-Fi</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Thriller</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Western</label>
            </div>
          </form>

          <form action="">
            <h3 className="text-lg pb-1">Excluded:</h3>
            <div>
              <input type="checkbox" checked className="mr-2" />
              <label>All</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Action</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Adventure</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Animated</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Biography</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Comedy</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Documentary</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Drama</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Fantasy</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Horror</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Mystery</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Romance</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Sci-Fi</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Thriller</label>
            </div>
            <div>
              <input type="checkbox" className="mr-2" />
              <label>Western</label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default filters;
