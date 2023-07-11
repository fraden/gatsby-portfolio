import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";

const modifyGrid = (data) => filterBySlug(data, ["/about", "/portrait", "/black-and-white", "/nature", "/animals", "/arts", "/cities", "/wedding"]);

export default modifyGrid;