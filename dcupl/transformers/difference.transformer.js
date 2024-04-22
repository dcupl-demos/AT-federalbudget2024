// dcupl/transformers/difference.transformer.js
return (dataTransformer = (resource, items) => {
  if (resource.type === "data") {
    return items.map((item) => {
      item.Differenz = item["BVA 2024"] - item["BVA 2023"];
      return item;
    });
  }
});
