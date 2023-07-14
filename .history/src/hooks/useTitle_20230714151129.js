import { useEffect } from 'react';

const UseTitle = title => {
    useEffect(() => {
        document.title = `${title}-Genius Car`;
    }, [title])
};
export default UseTitle;