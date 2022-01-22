<script>
import { create, endpoints } from "../services/Api";



    let newPost = {
        title:"",
        content:"",
        authorid: 0
    }
    
    const onSubmitForm = (e) => {
        const formData = new FormData(e.target)
        const data = {};
        for(let field of formData)
        {
            const [key,value] = field;
            data[key] = value;
        }

        console.log(data);
        create(endpoints.posts,data)
        .then(
        )
    }  
</script>


<form on:submit|preventDefault={onSubmitForm}>
    <div>
        <label for="title">Title</label>
        <input id="title" name="title" type="text" value="">
    </div>
    <div>
        <label for="content">Content</label>
        <textarea id="content" name="content" cols="30" rows="10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel mollitia, 
            laborum quia doloribus magni impedit illum iste ratione ex quod temporibus, 
            tenetur consectetur hic ad consequuntur pariatur ut voluptatum voluptates.
        </textarea>
    </div>
    <div>
        <input hidden id="authorid" name="authorid" type="number" value="1">
    </div>
    <input type="submit" value="Create Post">
</form>