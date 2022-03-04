import axios  from "axios";

const base_url_api="http://localhost:8083/api/getdata";
const base_url_save="http://localhost:8083/api/savedata";

class Students
{
    getstudentsdetail()
    {
        return axios.get(base_url_api);

    }
    addstudents(employee)
    {
        return axios.post(base_url_save,employee);
    }
}
export default new Students()