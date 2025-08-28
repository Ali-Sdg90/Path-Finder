import React, { useContext, useState } from "react";
import {
    ConfigProvider,
    FloatButton,
    Modal,
    Switch,
    Slider,
    Typography,
    Divider,
    theme,
    InputNumber,
    message,
    Space,
    Form,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { ColorPicker } from "antd";
import { BaseContext } from "../store/BaseContextProvider";

const { Title, Text } = Typography;

export default function SiteSettings() {
    const [open, setOpen] = useState(false);

    const {
        baseSize,
        setBaseSize,
        wallCount,
        setWallCount,
        color,
        setColor,
        showBorders,
        setShowBorders,
    } = useContext(BaseContext);

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <FloatButton
                icon={<SettingOutlined />}
                type="primary"
                style={{ right: 24, bottom: 80 }}
                onClick={() => setOpen(true)}
            />

            <Modal
                title="App Settings"
                centered
                open={open}
                onCancel={() => setOpen(false)}
                onOk={() => setOpen(false)}
                okText="Save"
                cancelText="Close"
                width={500}
                className="settings-modal"
            >
                <Form layout="vertical">
                    <Form.Item label={<Title level={5}>Color</Title>}>
                        <ColorPicker
                            value={color}
                            onChangeComplete={(c) => setColor(c.toHexString())}
                            showText
                        />
                    </Form.Item>
                    <Divider />

                    <Form.Item
                        label={<Title level={5}>Show Cell Borders</Title>}
                    >
                        <Space>
                            <Switch
                                checked={showBorders}
                                onChange={setShowBorders}
                            />
                            <Text>{showBorders ? "Enabled" : "Disabled"}</Text>
                        </Space>
                    </Form.Item>
                    <Divider />

                    <Form.Item label={<Title level={5}>Base Size</Title>}>
                        <Slider
                            min={50}
                            max={100}
                            step={5}
                            value={baseSize}
                            onChange={(value) => {
                                setWallCount((14 / 100) * (value * value));
                                setBaseSize(value);
                            }}
                        />
                        <Text>Selected value: {baseSize}</Text>
                    </Form.Item>
                    <Divider />

                    <Form.Item
                        label={<Title level={5}>Percentage of Walls</Title>}
                    >
                        <Space>
                            <InputNumber
                                min={0}
                                max={35}
                                step={5}
                                value={Math.floor(
                                    (wallCount / (baseSize * baseSize)) * 100
                                )}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value.replace("%", "")}
                                onChange={(value) =>
                                    setWallCount(
                                        (value / 100) * (baseSize * baseSize)
                                    )
                                }
                            />
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </ConfigProvider>
    );
}
