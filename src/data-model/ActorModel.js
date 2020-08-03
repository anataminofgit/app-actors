import moment from 'moment';

class ActorModel {
    constructor(fname, lname, birthday, imgUrl, linkIMDB) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.imgUrl = imgUrl;
        this.linkIMDB = linkIMDB;
        console.log("ActorModel", this);
    }

    getAge() {
        const age = moment().diff(this.birthday, 'years')
        return age;
    }
}
export default ActorModel;