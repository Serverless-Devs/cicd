import BaseComponent from './common/base';
import { InputProps } from './common/entity';
export default class ComponentDemo extends BaseComponent {
    constructor(props: any);
    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    github(inputs: InputProps): Promise<void>;
}
