import {NgModule} from "@angular/core";

import {CustomAttributesResource} from "./custom-attributes";
import {CustomAttributesValuesResource} from "./custom-attributes-values";
import {HistoryResource} from "./history";
import {InvitationsResource} from "./invitations";
import {KanbanResource} from "./kanban";
import {LocalesResource} from "./locales";
import {FeedbackResource} from "./feedback-resource.service";
import {MembershipsResource} from "./memberships";
import {ModulesResource} from "./modules";
import {NotifyPoliciesResource} from "./notify-policies";
import {RolesResource} from "./roles";
import {SearchResource} from "./search";
import {UserSettingsResource} from "./user-settings";
import {WebhookLogsResource} from "./webhooklogs";
import {WebhooksResource} from "./webhooks";

import {SprintsResource} from "./sprints-resource.service";
import {AttachmentsResource} from "./attachments-resource.service";
import {EpicsResource} from "./epics-resource.service";
import {ExternalAppsResource} from "./external-apps-resource.service";
import {AsanaResource, GithubResource, JiraResource, TrelloResource} from "./importers-resource.service";
import {IssuesResource} from "./issues-resource.service";
import {ProjectsResource} from "./projects-resource.service";
import {StatsResource} from "./stats-resource.service";
import {TasksResource} from "./tasks-resource.service";
import {UserResource} from "./user-resource.service";
import {UsersResource} from "./users-resource.service";
import {UserstoriesResource} from "./userstories-resource.service";
import {WikiResource} from "./wiki-resource.service";

import {ResourcesService} from "./resources.service";

@NgModule({
    providers: [
        ResourcesService,
        CustomAttributesResource,
        CustomAttributesValuesResource,
        HistoryResource,
        InvitationsResource,
        KanbanResource,
        LocalesResource,
        FeedbackResource,
        MembershipsResource,
        ModulesResource,
        NotifyPoliciesResource,
        RolesResource,
        SearchResource,
        SprintsResource,
        UserSettingsResource,
        WebhookLogsResource,
        WebhooksResource,
        WikiResource,
        AttachmentsResource,
        EpicsResource,
        ExternalAppsResource,
        TrelloResource,
        JiraResource,
        GithubResource,
        AsanaResource,
        IssuesResource,
        ProjectsResource,
        StatsResource,
        TasksResource,
        UserResource,
        UsersResource,
        UserstoriesResource,
    ],
})
export class ResourcesModule {}