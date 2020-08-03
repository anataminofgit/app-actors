class ActorModel {
    constructor(fname, lname, birthday, imgUrl, linkIMDB) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = new Date(birthday);
        this.imgUrl = imgUrl;
        this.linkIMDB = linkIMDB;

    }

    getAge() {
        return 100;
    }
}
export default ActorModel;