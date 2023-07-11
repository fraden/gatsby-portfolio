import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about", "/wedding", "/portrait", "/black-and-white", "/nature", "/animals", "/arts", "/cities"]);

export default modifyGrid;