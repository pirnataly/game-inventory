export async function getInventoryData(filename: string) {
  const dataFile = filename;
  const res = await fetch(dataFile);
  if (res.ok) {

    console.log('this is res',res);
    return await res.json();
  } else {
    return null
  }
  // return await res.json();
}


