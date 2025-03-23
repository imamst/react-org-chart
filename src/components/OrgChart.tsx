import React from "react";
import Tree, { TreeNodeDatum } from "react-d3-tree";
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

const nodeSize = { x: 300, y: 400 };

const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -(nodeSize.x / 2),
};

const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
}: {
    nodeDatum: TreeNodeDatum;
    toggleNode: () => void;
}) => {
    return (
        <g>
            <foreignObject {...foreignObjectProps}>
                <div className="flex justify-center items-center bg-gray-100 rounded-lg">

                    <div className="relative bg-white shadow-md rounded-lg px-4 pt-4 pb-6 flex items-center space-x-4 w-full">
                        <img src="./profile.jpg" alt="Profile Picture" className="w-12 h-12 rounded-full object-cover" />

                        <div className="flex-1">
                            <h2 className="text-gray-900 font-semibold">{nodeDatum.name}</h2>
                            <div className="flex items-center space-x-2">
                                <p className="text-gray-500 text-sm">{nodeDatum.attributes?.position}</p>
                                <p className="text-red-600 text-sm flex items-center">
                                    <span className="w-2 h-2 bg-red-600 rounded-full mr-1"></span> {nodeDatum.attributes?.department}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </foreignObject>
        </g>
    );
};

const OrgChart: React.FC = () => {
    const [translate, containerRef] = useCenteredTree();

    return (
        <div style={containerStyles} ref={containerRef}>
            <Tree
                data={orgChartData}
                orientation="vertical"
                translate={translate}
                nodeSize={nodeSize}
                pathFunc="step"
                separation={{ siblings: 2, nonSiblings: 2 }}
                renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps })
                }
            />
        </div>
    );
};

export default OrgChart;