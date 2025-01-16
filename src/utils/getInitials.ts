function getInitials(name: string): string {
  const nameArray = name.split(" ");
  return nameArray.map((word) => word[0]).join("");
}

export default getInitials;
