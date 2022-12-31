import { FakeChat } from '../components/FakeChat';

export function FakeChat1() {
    return (
        <FakeChat
            user='Tech Lead'
            messages={[
                {
                    from: 'Director',
                    text: 'How was our cycle time this quarter?'
                },
                {
                    from: 'Tech Lead',
                    text: 'We shipped about 2 features per week and 4 enhancements per week'
                },
                {
                    from: 'Director',
                    text: 'Great job.  Anything we can do to improve that?'
                },
                {
                    from: 'Tech Lead',
                    text: 'Yes, in our retro the team had a list of action items.  I emailed it to you'
                },     
                {
                    from: 'Director',
                    text: 'Thanks I\'m on it!'
                }       
            ]}
        />
    )
}