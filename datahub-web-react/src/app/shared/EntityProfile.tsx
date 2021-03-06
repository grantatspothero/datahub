import * as React from 'react';
import { Col, Row, Divider, Layout, Card, Typography } from 'antd';
import styled from 'styled-components';
import { TagOutlined } from '@ant-design/icons';

import { RoutedTabs } from './RoutedTabs';

export interface EntityProfileProps {
    title: string;
    tags?: React.ReactNode;
    header: React.ReactNode;
    tabs?: Array<{
        name: string;
        path: string;
        content: React.ReactNode;
    }>;
}

const TagsTitle = styled(Typography.Title)`
    font-size: 18px;
`;

const TagCard = styled(Card)`
    margin-top: 24px;
    font-size: 18px;
    min-width: 100%;
    width: 100%;
`;

const TagIcon = styled(TagOutlined)`
    padding-right: 6px;
`;

const defaultProps = {
    tags: [],
    tabs: [],
};

/**
 * A default container view for presenting Entity details.
 */
export const EntityProfile = ({ title, tags, header, tabs }: EntityProfileProps) => {
    const defaultTabPath = tabs && tabs?.length > 0 ? tabs[0].path : '';

    /* eslint-disable spaced-comment */
    return (
        <Layout.Content style={{ padding: '0px 100px' }}>
            <div>
                <Row>
                    <Col span={16} md={16} sm={24} xs={24}>
                        <div>
                            <Row style={{ padding: '20px 0px 10px 0px' }}>
                                <Col span={24}>
                                    <h1>{title}</h1>
                                </Col>
                            </Row>
                            {header}
                        </div>
                    </Col>
                    <Col span={8} xs={24} sm={24} md={8}>
                        <TagCard>
                            <TagsTitle type="secondary" level={4}>
                                <TagIcon /> Tags
                            </TagsTitle>
                            {tags}
                        </TagCard>
                    </Col>
                </Row>
                <Divider style={{ marginBottom: '0px' }} />
                <Row style={{ padding: '0px 0px 10px 0px' }}>
                    <Col span={24}>
                        <RoutedTabs defaultPath={defaultTabPath} tabs={tabs || []} />
                    </Col>
                </Row>
            </div>
        </Layout.Content>
    );
};

EntityProfile.defaultProps = defaultProps;
