import FavortieRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching resto', () => {
  let presenter;

  const searchRestaurants = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
      <div id="resto-search-container">
        <input id="query" type="text">
        <div class="resto-result-container">
          <ul class="restos">
          </ul>
        </div>
      </div>
    `;
  };

  const constructorPresenter = () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    presenter = new FavortieRestoSearchPresenter({
      favoriteRestaurants: FavoriteRestaurantIdb,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructorPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchRestaurants('katalog a');
    expect(presenter.latestQuery).toEqual('katalog a');
  });

  it('should ask the model to search for liked restaurants', () => {
    searchRestaurants('katalog a');

    expect(FavoriteRestaurantIdb.searchRestaurants).toHaveBeenCalledWith('katalog a');
  });

  it('should show the found restaurants', () => {
    presenter._showFoundResto([{ id: 1 }]);
    expect(document.querySelectorAll('.restto').length).toEqual(1);
    presenter._showFoundResto([
      {
        id: 1,
        name: 'Satu',
      },
      {
        id: 2,
        name: 'Dua',
      },
    ]);
    expect(document.querySelectorAll('.restto').length).toEqual(2);
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundResto([
      {
        id: 1,
        name: 'Satu',
      },
    ]);
    expect(document.querySelector('.restto__title').textContent).toEqual('Satu');
  });

  it('should show the title of the found restaurants', () => {
    presenter._showFoundResto([
      {
        id: 1,
        name: 'Satu',
      },
    ]);
    expect(document.querySelector('.restto__title').item(0).textContent).toEqual('Satu');
    presenter._showFoundResto([
      {
        id: 1,
        name: 'Satu',
      },
      {
        id: 2,
        name: 'Dua',
      },
    ]);

    const restoTitle = document.querySelectorAll('.restto__title');
    expect(restoTitle.item(0).textContent).toEqual('Satu');
    expect(restoTitle.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found resto without title', () => {
    presenter._showFoundResto([
      {
        id: 1,
      },
    ]);
    expect(document.querySelectorAll('.restto__title').item(0).textContent).toEqual('-');
  });
});
