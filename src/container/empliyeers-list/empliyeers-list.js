import './empliyeers-list.css';

const EmpliyeesList = ({data}) => {
    const elements = data.map(item => {
            return (
                <EmpliyeesList {...item}/>
                // name={item.name} salary={item.salary}
            );
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmpliyeesList;