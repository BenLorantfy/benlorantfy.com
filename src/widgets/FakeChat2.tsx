import { FakeChat } from '../components/FakeChat';

export function FakeChat2() {
    return (
        <FakeChat
            user='Tech Lead'
            messages={[
                {
                    from: 'Director',
                    text: 'How is the firebird project going?'
                },
                {
                    from: 'Tech Lead',
                    text: 'We\'re still working on the thunderbird project'
                },
                {
                    from: 'Director',
                    text: 'Ok lets wrap that up.  We need the firebird project completed this month so we look good on the quarterly report.  We also need to start the waterbird project soon'
                },
                {
                    from: 'Director',
                    text: 'Still on track for the firebird project?'
                },
                {
                    from: 'Tech Lead',
                    text: 'Actually we decided to implement the snowbird project, which we identified this month and solves a big user problem.  Users are really loving it and user retention is up 10%'
                },     
                {
                    from: 'Director',
                    text: 'Ok lets find ways to get the firebird project shipped'
                },
                {
                    from: 'Director',
                    text: 'By the way, we need help with another project in the pipeline - a big client wants feature Z'
                },
                {
                    from: 'Tech Lead',
                    text: 'Have we done any user research to validate the need and impact?  Before you joined, our team typically researched users\' problems and then designed the solutions'
                },
                {
                    from: 'Director',
                    text: 'What do you mean by user research?'
                },
            ]}
        />
    )
}