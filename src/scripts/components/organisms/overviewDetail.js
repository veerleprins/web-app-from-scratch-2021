// Constants
import { posterPath } from "../../config/config";

// Modules
import { appendToElement } from "../../modules/helpers/append";

// Components
import { createElement } from "../atoms/element";
import { createArticle } from "../organisms/article1";
import { createSecondArticle } from "../molecules/article2";

export const createOverview = (data, providers) => {
  // This function creates the overview of the movie page:
  // Create the total element:
  const section = createElement("section");

  // Create all the html elements:
  const poster = createElement("img", {
    src: `${posterPath}${data.poster_path}`,
    alt: `Poster of the movie: ${data.original_title}`,
  });

  const article = createArticle(data, providers);
  const article2 = createSecondArticle(data);

  // Adding to the element:
  appendToElement([poster, article, article2], section);
  return section;
};
