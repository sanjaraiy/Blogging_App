import config from '../config'
import {Client, Account,ID} from "appwrite";

//---Create Class---
export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.appwriteProjectId)

        this.account=new Account(this.client)
    }

    async createAccount({email,password,name}){
       try{
          const userAccount=await this.account.create(ID.unique(), email,password,name);
          if(userAccount){
            // return userAccount;
            //call another method
            return this.login({email,password});

          }else{
            return userAccount;
          }
       }catch(error){
          throw error;
       }
    }

    async login({email, password}){
        try {
           const user = await this.account.createEmailSession(email,password);
           return user;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

//---Create object of this class---
const authService=new AuthService();


export default authService