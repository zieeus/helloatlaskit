/** @jsx jsx */
import { jsx } from '@emotion/react';

import {
    Header,
    NavigationHeader,
    SideNavigation,
} from '@atlaskit/side-navigation';

import { Content, LeftSidebar, Main, PageLayout } from '@atlaskit/page-layout';
import { ExpandLeftSidebarKeyboardShortcut, SlotLabel } from './common';

export default () => {
    return (
        <PageLayout>
            <Content>
                <LeftSidebar width={450} testId="left-sidebar">
                    <ExpandLeftSidebarKeyboardShortcut />

                    <SideNavigation label="Project navigation" testId="side-navigation">
                        <NavigationHeader>
                            <Header description="Sidebar header description">
                                Sidebar Header
                            </Header>
                        </NavigationHeader>
                    </SideNavigation>
                </LeftSidebar>

                <Main>
                    <SlotLabel>Main Content</SlotLabel>
                    <div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
<div>SSSSSSSSSSSSSSSSSSSS</div>
                </Main>
            </Content>
        </PageLayout>
    );
};