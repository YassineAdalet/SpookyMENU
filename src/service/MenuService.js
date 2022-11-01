import axios from "axios";

const url = "http://localhost:9000/dishes/";

class MenuService {
  static getMenu() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;

          resolve(
            data.data.map((menuItem) => ({
              ...menuItem,
            }))
          );
        })

        .catch((err) => {
          reject(err);
        });
    });
  }
  static addMenu(
    name,
    description,
    category,
    availableTime,
    price,
    preparationTime,
    count,
    soldOut
  ) {
    return axios.put(url, {
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count,
      soldOut,
    });
  }
  static deleteMenu(id) {
    return axios.delete(`${url}${id}`);
  }
  static updateMenu(
    _id,
    name,
    description,
    category,
    availableTime,
    price,
    preparationTime,
    count,
    soldOut,
  ) {
    return axios.put(url, {
      _id,
      name,
      description,
      category,
      availableTime,
      price,
      preparationTime,
      count,
      soldOut,
    });
  }
}

export default MenuService;
