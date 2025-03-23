import React, { useCallback, useState } from "react";
import Tree from "react-d3-tree";
import orgChartData from "../data/orgTree.json"
import { useCenteredTree } from "../hooks/useCenteredTree";

interface IContainerStyles {
    width: string,
    height: string
}

const containerStyles: IContainerStyles = {
    width: "100%",
    height: "100vh",
};

const OrgChart: React.FC = () => {
    const [translate, containerRef] = useCenteredTree();

    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={orgChartData}
                orientation="vertical"
                translate={translate}
                nodeSize={{ x: 200, y: 200 }}
                pathFunc="step"
                separation={{ siblings: 2, nonSiblings: 2 }}
            />
        </div>
    );
};

export default OrgChart;