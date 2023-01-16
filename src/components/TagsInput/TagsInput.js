
import TagOptions from "./TagOptions";

function TagsInput({setTags, setTagsInput, tagsInput, tags}) {

    function handleKeyDown(e) {
       
        if (e.key !== 'Enter') return;

        e.preventDefault();
        
        if (!tagsInput) return;
        setTags([...tags, tagsInput]);
        setTagsInput('');
    }

    function removeTag(index) {
        setTags(tags.filter((tag, i) => i !== index));
    }
        
    

    return (
        <div className="border rounded shadow-sm p-1 flex items-center flex-wrap bg-white">
            { tags.map((tag, index) => (
                <div className="bg-gray-300 inline-block px-2 py-1 rounded mr-1" key={index}>
                    <span className="text-sm text-gray-700">{tag}</span>
                    <span onClick={() => removeTag(index)} className="cursor-pointer ml-1 inline-flex content-center items-center">&times;</span>
                </div>
            ))
            }
            <input onChange={(e) => setTagsInput(e.target.value)} onKeyDown={handleKeyDown} type="text"  value={tagsInput} placeholder="Press Enter to add tag..." list="tagOptions" className="flex-grow px-1 text-xs outline-none border-none shadow-none" />
            <TagOptions />
        </div>
    )
}

export default TagsInput;