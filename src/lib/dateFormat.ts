export const dateFormat = (data: any) => {
    const date: Date = new Date(data);
    const day: string = ("0" + date.getDate()).slice(-2);
    const month: string = ("0" + (date.getMonth() + 1)).slice(-2);
    const year: string = date.getFullYear().toString();
    return `${day}/${month}/${year}`;
  };
  
  export const monthFormat = (data: string) => {
    const date: Date = new Date(data);
    const formattedDate: string = `${date.toLocaleString("default", {
      month: "short",
    })} '${date.getFullYear().toString().substr(-2)}`;
    return formattedDate;
  };
  
  
  export const dateFormatFront = (data: string): string => {
    const date: Date = new Date(data);
    const formattedDate: string = `${date.getDate()}`;
    return formattedDate;
  };