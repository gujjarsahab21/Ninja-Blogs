import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";
//1 sbse phle 'auth' jesa kro import kro class banao uska object banao aur fir us object ko export default kro
//2 ab kyuki new var ka use krke service banayi h to constructor wagera banega he banega
//3 var decalre krdena phle jese client databases bucket
//4 in variable k andar account kb banna chiye jb constructor call ho
//5 constructor k andr purane jesa copy paste krdo
//6 ab ye databases aur bucket ko fill krna pdega documentation me de rkha h
//7 create post krke asyn await method banate h jisme phle jesa he hai createPost naam se method banao 
//8 try catch lgao catch me consolelog karwao then try k andr await lga ke createdocument call kro ye docs me h
//9 dbid & colllectionid dono ko deo teesra slug deo nd last me objects (jo further information hai wo pass hogi)
//10 appwrite ke documentation me ye poora database ko create krna bataya h...
//11 updatepost krke asyn await method banao same upr wale jesee
//12 uniquely indetify ho isliye slug ko baki bjects se bahar lenge, userid mt ho kyuki jo h whi krega sb thodi krenge
//13 try catch lgao catch me same whi aur try me await method return krdo jisme phla dbid dusra collectionid hoga
//14 teera document id dena h jo ki apn ne slug le l next objects ==> jo jo update krna h wo dedo
//15 same for delete bs slug pass krna h or T/F return krna h
//16 agr ek post chahiye ho to getPost naam se method banake return krna h
//17 agr saari post chahiye to aisa direct nhi kr skte becoz jinka status inactive hai wo bhi aa jayenge jo hame nhi chahiye
//18 iske lie queries likhni pdegi jisme ye hoga ki jo post active hai sirf unko dikhao
//19 iske lie indexes kam ayega jo hamne appwrite me banaya tha query likho aur kam ho jayega

export class Service{
    client = new Client();
    databases;
    bucket;
    
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                

            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}


const service = new Service()
export default service

//20 file upload service k sbse phle docs pdhn a storage walla usme upload file ka code hooga see it
//21 whi try catch lgana h catch me  copy paste nd return false krna h nd try me await ko return krna h
//22 by createfile file is created phla bucketid add krna dusra id ko unique banana h then uploadfile k pram ko  pass krna as a third 
//23 same for delete file bs parameter me fileId dena hoga
//24 file preview me asyn await nhi bhi lagaye to chalega coz iska response bada fast h (naa he try catch)