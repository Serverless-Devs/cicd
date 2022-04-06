import { InputProps } from './common/entity';
export default class CiCdComponent {
    /**
     * 交互式获取CI/CD解决方案（默认方法）
     * @param inputs
     * @returns
     */
    index(inputs: InputProps): Promise<void>;
    /**
     * 创建Github Action模板
     * @param inputs
     * @returns
     */
    github(inputs: InputProps): Promise<void>;
    /**
     * 创建Gitee Go模板
     * @param inputs
     * @returns
     */
    gitee(inputs: InputProps): Promise<void>;
}
