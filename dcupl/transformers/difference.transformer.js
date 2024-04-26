// dcupl/transformers/difference.transformer.js
return (dataTransformer = (resource, items) => {
  if (resource.type === "data") {
    // Filter and map items to only process ones with both BVA 2024 and BVA 2023 defined
    return items.filter(item => 
      typeof item["BVA 2024"] !== "undefined" && typeof item["BVA 2023"] !== "undefined"
    ).map(item => {
      // Calculate the difference if both fields are numbers; otherwise, handle the error or skip
      if (typeof item["BVA 2024"] === "number" && typeof item["BVA 2023"] === "number") {
        item.Differenz = item["BVA 2024"] - item["BVA 2023"];
      } else {
        console.error("Error: BVA 2024 and BVA 2023 must be numbers");
      }
      return item;
    });
  }
});
