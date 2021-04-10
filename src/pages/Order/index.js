import { useContext } from 'react'
import { UserContext } from '../../app/App'
import List from '../../component/List'

export default function Order() {

    const { user } = useContext(UserContext)
    
    return (
        <div className="px-4 px-lg-0">
            <div className="pb-5">
                <div className="container">
                    <div className="row">
                        <List extraforOrder={false} extraforAdmin={false} listname="Order" item={user.checkouts} />
                    </div>
                </div>
            </div>
        </div>

    )
}
