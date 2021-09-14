export const getLoans= async ()=> { 
	try{
		const response= await fetch("https://api.cfc-kw.com/customers/584657/loans");
		const json = await response.json();
		return json.data;
	}
	catch (error) {
		console.error(error);
	  }
 }
 
 export const getLoanHistory=async(account_no:string)=>{
	try{
		const response= await fetch(`https://api.cfc-kw.com/customers/584657/loans/${account_no}/history`);
		const json = await response.json();
		return json.data;
		}
	catch (error) {
			console.error(error);
		  }
 }