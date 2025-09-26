import { useEffect, useMemo, useState } from 'react';
import Sidebar from './components/Sidebar';
import SectionCard from './components/SectionCard';
import DataTable from './components/DataTable';
import Badge from './components/Badge';
import {
  businessStats,
  companyInfo,
  riskAlerts,
  products,
  pendingApplications,
  policies,
  insuredEnterprises,
  brokers,
  serviceAgencies,
  serviceTasks,
  serviceArchives,
  serviceExpenses,
  serviceFeedback,
  experts,
  claimApplications,
  claimProcesses,
  claimDocuments,
  complianceReferences,
  incentiveRecords
} from './data/mockData';
import './styles/app.css';

const App = () => {
  const navigation = useMemo(
    () => [
      {
        id: 'overview',
        label: '公司概览',
        children: [
          { id: 'overview-basic', label: '基本信息维护' },
          { id: 'overview-stats', label: '业务数据统计' },
          { id: 'overview-alerts', label: '风险预警提醒' }
        ]
      },
      {
        id: 'underwriting',
        label: '承保管理',
        children: [
          { id: 'underwriting-products', label: '保险产品' },
          { id: 'underwriting-applications', label: '投保单处理' },
          { id: 'underwriting-policies', label: '保单库管理' },
          { id: 'underwriting-enterprises', label: '企业信息' },
          { id: 'underwriting-brokers', label: '经纪人库' }
        ]
      },
      {
        id: 'services',
        label: '事故预防服务',
        children: [
          { id: 'services-agencies', label: '技服机构库' },
          { id: 'services-tasks', label: '任务派发' },
          { id: 'services-archives', label: '服务档案' },
          { id: 'services-expenses', label: '费用支出' },
          { id: 'services-feedback', label: '服务评价' },
          { id: 'services-experts', label: '专家库' }
        ]
      },
      {
        id: 'claims',
        label: '理赔管理',
        children: [
          { id: 'claims-applications', label: '申请受理' },
          { id: 'claims-process', label: '流程跟进' },
          { id: 'claims-documents', label: '资料管理' }
        ]
      },
      {
        id: 'compliance',
        label: '合规与风险',
        children: [
          { id: 'compliance-references', label: '风险判定依据' },
          { id: 'compliance-incentives', label: '奖惩信息' }
        ]
      }
    ],
    []
  );

  const defaultSection = navigation[0].children?.[0]?.id ?? navigation[0].id;
  const [activeSection, setActiveSection] = useState<string>(defaultSection);

  useEffect(() => {
    const target = document.getElementById(activeSection);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeSection]);

  return (
    <div className="layout">
      <Sidebar sections={navigation} activeSection={activeSection} onSelect={setActiveSection} />
      <main className="main">
        <header className="main__header">
          <div>
            <h1>安责险企业安全生产保险管理后台</h1>
            <p className="main__subtitle">覆盖承保、事故预防、理赔、合规等业务全流程</p>
          </div>
        </header>

        <div className="grid">
          <SectionCard
            id="overview-basic"
            title="公司基本信息维护"
            description="管理保险机构的核心基础信息"
          >
            <div className="info-grid">
              <div>
                <span className="info-grid__label">机构名称</span>
                <span className="info-grid__value">{companyInfo.name}</span>
              </div>
              <div>
                <span className="info-grid__label">许可证编号</span>
                <span className="info-grid__value">{companyInfo.licenseNo}</span>
              </div>
              <div>
                <span className="info-grid__label">联系方式</span>
                <span className="info-grid__value">{companyInfo.contact}</span>
              </div>
              <div>
                <span className="info-grid__label">办公地址</span>
                <span className="info-grid__value">{companyInfo.address}</span>
              </div>
              <div>
                <span className="info-grid__label">资质信息</span>
                <span className="info-grid__value">{companyInfo.qualification}</span>
              </div>
            </div>
          </SectionCard>

          <SectionCard
            id="overview-stats"
            title="安责险业务数据统计"
            description="实时掌握承保规模与理赔、服务费用投入情况"
            extra={<Badge tone="success">本月已更新</Badge>}
          >
            <div className="stats">
              <div className="stats__item">
                <span className="stats__value">{businessStats.policies}</span>
                <span className="stats__label">在保保单量</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">¥ {businessStats.premiumIncome} 万</span>
                <span className="stats__label">保费收入</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">¥ {businessStats.claimPayout} 万</span>
                <span className="stats__label">理赔支出</span>
              </div>
              <div className="stats__item">
                <span className="stats__value">¥ {businessStats.preventionInvestment} 万</span>
                <span className="stats__label">事故预防投入</span>
              </div>
            </div>
          </SectionCard>

          <SectionCard id="overview-alerts" title="风险预警提醒" description="对重大隐患与服务不足进行预警">
            <div className="alerts">
              {riskAlerts.map((alert) => (
                <div key={alert.title} className={`alerts__item alerts__item--${alert.severity}`}>
                  <h3>{alert.title}</h3>
                  <p>{alert.description}</p>
                  <Badge tone={alert.severity === 'high' ? 'danger' : 'warning'}>
                    {alert.severity === 'high' ? '高风险' : '中风险'}
                  </Badge>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard id="underwriting-products" title="保险产品信息管理" description="维护在售安责险产品条款">
            <DataTable
              columns={[
                { header: '产品名称', render: (row) => row.name },
                { header: '适用行业', render: (row) => row.industry },
                { header: '保障范围', render: (row) => row.coverage },
                {
                  header: '状态',
                  render: (row) => <Badge tone={row.status === '在售' ? 'success' : 'default'}>{row.status}</Badge>
                }
              ]}
              data={products}
            />
          </SectionCard>

          <SectionCard
            id="underwriting-applications"
            title="投保单审核与处理"
            description="快速处理投保申请，提升承保效率"
          >
            <DataTable
              columns={[
                { header: '企业名称', render: (row) => row.company },
                { header: '所属地区', render: (row) => row.region },
                { header: '当前状态', render: (row) => row.status },
                { header: '提交时间', render: (row) => row.submittedAt }
              ]}
              data={pendingApplications}
            />
          </SectionCard>

          <SectionCard
            id="underwriting-policies"
            title="保单库管理"
            description="统一管理在保保单，支持续期与变更"
          >
            <DataTable
              columns={[
                { header: '保单号', render: (row) => row.policyNo },
                { header: '投保企业', render: (row) => row.company },
                { header: '生效日期', render: (row) => row.effectiveDate },
                { header: '到期日期', render: (row) => row.expiryDate },
                {
                  header: '保单状态',
                  render: (row) => <Badge tone={row.status === '生效中' ? 'success' : 'warning'}>{row.status}</Badge>
                }
              ]}
              data={policies}
            />
          </SectionCard>

          <SectionCard
            id="underwriting-enterprises"
            title="企业信息管理"
            description="查看投保企业基本信息与风险等级"
          >
            <DataTable
              columns={[
                { header: '企业名称', render: (row) => row.name },
                { header: '所属行业', render: (row) => row.industry },
                { header: '风险等级', render: (row) => row.riskLevel },
                { header: '保单状态', render: (row) => row.policyStatus }
              ]}
              data={insuredEnterprises}
            />
          </SectionCard>

          <SectionCard id="underwriting-brokers" title="保险经纪人库管理" description="维护合作经纪机构信息">
            <DataTable
              columns={[
                { header: '经纪机构', render: (row) => row.name },
                { header: '联系方式', render: (row) => row.contact },
                { header: '资质', render: (row) => row.qualification }
              ]}
              data={brokers}
            />
          </SectionCard>

          <SectionCard
            id="services-agencies"
            title="安全生产技术服务机构库管理"
            description="管理合作技服机构资质与协议"
          >
            <DataTable
              columns={[
                { header: '机构名称', render: (row) => row.name },
                { header: '专业特长', render: (row) => row.specialty },
                { header: '资质等级', render: (row) => row.qualification },
                { header: '协议有效期', render: (row) => row.agreementValidUntil }
              ]}
              data={serviceAgencies}
            />
          </SectionCard>

          <SectionCard
            id="services-tasks"
            title="事故预防服务任务派发"
            description="明确服务任务内容与频次"
          >
            <DataTable
              columns={[
                { header: '任务名称', render: (row) => row.title },
                { header: '服务对象', render: (row) => row.target },
                { header: '频次', render: (row) => row.frequency },
                { header: '承接机构', render: (row) => row.assignedTo },
                { header: '状态', render: (row) => row.status }
              ]}
              data={serviceTasks}
            />
          </SectionCard>

          <SectionCard
            id="services-archives"
            title="事故预防服务档案管理"
            description="确保服务过程可追溯"
          >
            <DataTable
              columns={[
                { header: '企业', render: (row) => row.company },
                { header: '最近服务日期', render: (row) => row.lastService },
                { header: '建档时间', render: (row) => row.archiveSince },
                { header: '备注', render: (row) => row.remarks }
              ]}
              data={serviceArchives}
            />
          </SectionCard>

          <SectionCard
            id="services-expenses"
            title="服务费用支出管理"
            description="建立专项费用台账"
          >
            <DataTable
              columns={[
                { header: '项目', render: (row) => row.project },
                { header: '金额（万元）', render: (row) => row.amount },
                { header: '支出日期', render: (row) => row.date },
                { header: '备注', render: (row) => row.remarks }
              ]}
              data={serviceExpenses}
            />
          </SectionCard>

          <SectionCard
            id="services-feedback"
            title="服务评价与反馈管理"
            description="收集企业反馈持续优化"
          >
            <DataTable
              columns={[
                { header: '企业', render: (row) => row.company },
                { header: '满意度', render: (row) => row.rating },
                { header: '反馈意见', render: (row) => row.comment }
              ]}
              data={serviceFeedback}
            />
          </SectionCard>

          <SectionCard
            id="services-experts"
            title="专家库管理"
            description="维护专家资源，提升服务能力"
          >
            <DataTable
              columns={[
                { header: '专家姓名', render: (row) => row.name },
                { header: '专业领域', render: (row) => row.specialty },
                { header: '执业资质', render: (row) => row.certification }
              ]}
              data={experts}
            />
          </SectionCard>

          <SectionCard id="claims-applications" title="理赔申请受理" description="受理企业报案及理赔申请">
            <DataTable
              columns={[
                { header: '案件号', render: (row) => row.caseNo },
                { header: '报案企业', render: (row) => row.company },
                { header: '状态', render: (row) => row.status },
                { header: '报案日期', render: (row) => row.reportedAt }
              ]}
              data={claimApplications}
            />
          </SectionCard>

          <SectionCard id="claims-process" title="理赔流程跟进" description="掌握关键节点进度">
            <DataTable
              columns={[
                { header: '环节', render: (row) => row.step },
                { header: '责任部门', render: (row) => row.owner },
                {
                  header: '完成状态',
                  render: (row) => (
                    <Badge
                      tone={row.status === '完成' ? 'success' : row.status === '进行中' ? 'warning' : 'default'}
                    >
                      {row.status}
                    </Badge>
                  )
                }
              ]}
              data={claimProcesses}
            />
          </SectionCard>

          <SectionCard id="claims-documents" title="理赔资料管理" description="理赔资料收集与归档">
            <DataTable
              columns={[
                { header: '资料名称', render: (row) => row.name },
                { header: '资料状态', render: (row) => row.status },
                { header: '资料保管方', render: (row) => row.keeper }
              ]}
              data={claimDocuments}
            />
          </SectionCard>

          <SectionCard
            id="compliance-references"
            title="企业安全风险判定依据"
            description="辅助费率厘定与风险评估"
          >
            <DataTable
              columns={[
                { header: '资料类型', render: (row) => row.type },
                { header: '资料说明', render: (row) => row.description },
                { header: '状态', render: (row) => row.fileStatus }
              ]}
              data={complianceReferences}
            />
          </SectionCard>

          <SectionCard id="compliance-incentives" title="奖惩信息管理" description="记录监管及表彰情况">
            <DataTable
              columns={[
                { header: '类型', render: (row) => row.event },
                { header: '描述', render: (row) => row.description },
                { header: '日期', render: (row) => row.date }
              ]}
              data={incentiveRecords}
            />
          </SectionCard>
        </div>
      </main>
    </div>
  );
};

export default App;
