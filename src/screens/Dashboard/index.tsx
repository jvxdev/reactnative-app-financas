import React from 'react';

import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { HighlightCard } from '../../components/HighlightCard';

export function Dashboard() {
    return (
    <Container>
        <Header>
            <UserWrapper>
                <UserInfo>
                    <Photo 
                        source={{ uri: 'https://avatars.githubusercontent.com/u/54956887?v=4'}}
                    />
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>João</UserName>
                    </User>
                </UserInfo>
                <Icon name="power"/>
            </UserWrapper>
        </Header>
        <HighlightCards>
            <HighlightCard />
            <HighlightCard />
            <HighlightCard />
            <HighlightCard />
            <HighlightCard />
        </HighlightCards>
    </Container>
    )
}