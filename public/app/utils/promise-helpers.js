export const handleStatus = res => 
    res.ok ? res.json() : Promise.reject(res.statustext);

export const log = param => {
    console.log(param);
    return param;
};