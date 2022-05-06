package  com.ird.faa;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import java.util.*;
import java.util.stream.Stream;

import com.ird.faa.security.common.AuthoritiesConstants;
import com.ird.faa.security.bean.User;
import com.ird.faa.security.bean.Permission;
import com.ird.faa.security.bean.Role;
import com.ird.faa.security.service.facade.UserService;
import com.ird.faa.security.service.facade.RoleService;
import com.ird.faa.bean.Chercheur;

import com.ird.faa.service.chercheur.facade.EtatEtapeCampagneChercheurService;
import com.ird.faa.bean.EtatEtapeCampagne;

@SpringBootApplication
public class FaaApplication {
public static ConfigurableApplicationContext ctx;

public static void main(String[] args) {
ctx=SpringApplication.run(FaaApplication.class, args);
}

public static ConfigurableApplicationContext getCtx() {
return ctx;
}

@Bean
public CommandLineRunner demo(UserService userService, RoleService roleService
, EtatEtapeCampagneChercheurService etatEtapeCampagneChercheurService) {
return (args) -> {
if(true){
    Map<String,String> etats=new HashMap<>();
    etats.put("Initialisé","initialise");
    etats.put("En cours","encours");
    etats.put("Terminé","termine");
    etats.entrySet().stream().forEach(e->etatEtapeCampagneChercheurService.save(new EtatEtapeCampagne(e.getKey(),e.getValue())));


    // Role chercheur
        Chercheur userForChercheur = new Chercheur("chercheur");

    Role roleForChercheur = new Role();
    roleForChercheur.setAuthority(AuthoritiesConstants.CHERCHEUR);
    List<Permission> permissionsForChercheur = new ArrayList<>();
    addPermissionForChercheur(permissionsForChercheur);
    roleForChercheur.setPermissions(permissionsForChercheur);
    if(userForChercheur.getRoles()==null)
    userForChercheur.setRoles(new ArrayList<>());

    userForChercheur.getRoles().add(roleForChercheur);
    userService.save(userForChercheur);


    // Role admin
        User userForAdmin = new User("admin");

    Role roleForAdmin = new Role();
    roleForAdmin.setAuthority(AuthoritiesConstants.ADMIN);
    List<Permission> permissionsForAdmin = new ArrayList<>();
    addPermissionForAdmin(permissionsForAdmin);
    roleForAdmin.setPermissions(permissionsForAdmin);
    if(userForAdmin.getRoles()==null)
    userForAdmin.setRoles(new ArrayList<>());

    userForAdmin.getRoles().add(roleForAdmin);
    userService.save(userForAdmin);
    }
        };
        }

        private static void addPermissionForChercheur(List
        <Permission> permissions){
                permissions.add(new Permission("DisciplineScientifique.edit"));
                permissions.add(new Permission("DisciplineScientifique.list"));
                permissions.add(new Permission("DisciplineScientifique.view"));
                permissions.add(new Permission("DisciplineScientifique.add"));
                permissions.add(new Permission("DisciplineScientifique.delete"));
                permissions.add(new Permission("IdentifiantRecherche.edit"));
                permissions.add(new Permission("IdentifiantRecherche.list"));
                permissions.add(new Permission("IdentifiantRecherche.view"));
                permissions.add(new Permission("IdentifiantRecherche.add"));
                permissions.add(new Permission("IdentifiantRecherche.delete"));
                permissions.add(new Permission("EnjeuxIrd.edit"));
                permissions.add(new Permission("EnjeuxIrd.list"));
                permissions.add(new Permission("EnjeuxIrd.view"));
                permissions.add(new Permission("EnjeuxIrd.add"));
                permissions.add(new Permission("EnjeuxIrd.delete"));
                permissions.add(new Permission("Distinction.edit"));
                permissions.add(new Permission("Distinction.list"));
                permissions.add(new Permission("Distinction.view"));
                permissions.add(new Permission("Distinction.add"));
                permissions.add(new Permission("Distinction.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.list"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.view"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.add"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.delete"));
                permissions.add(new Permission("SemanticRelationship.edit"));
                permissions.add(new Permission("SemanticRelationship.list"));
                permissions.add(new Permission("SemanticRelationship.view"));
                permissions.add(new Permission("SemanticRelationship.add"));
                permissions.add(new Permission("SemanticRelationship.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.list"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.view"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.add"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErc.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErc.list"));
                permissions.add(new Permission("DisciplineScientifiqueErc.view"));
                permissions.add(new Permission("DisciplineScientifiqueErc.add"));
                permissions.add(new Permission("DisciplineScientifiqueErc.delete"));
                permissions.add(new Permission("IdentifiantAuteurExpert.edit"));
                permissions.add(new Permission("IdentifiantAuteurExpert.list"));
                permissions.add(new Permission("IdentifiantAuteurExpert.view"));
                permissions.add(new Permission("IdentifiantAuteurExpert.add"));
                permissions.add(new Permission("IdentifiantAuteurExpert.delete"));
                permissions.add(new Permission("EnjeuxIrdChercheur.edit"));
                permissions.add(new Permission("EnjeuxIrdChercheur.list"));
                permissions.add(new Permission("EnjeuxIrdChercheur.view"));
                permissions.add(new Permission("EnjeuxIrdChercheur.add"));
                permissions.add(new Permission("EnjeuxIrdChercheur.delete"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.edit"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.list"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.view"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.add"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.delete"));
                permissions.add(new Permission("EtatEtapeCampagne.edit"));
                permissions.add(new Permission("EtatEtapeCampagne.list"));
                permissions.add(new Permission("EtatEtapeCampagne.view"));
                permissions.add(new Permission("EtatEtapeCampagne.add"));
                permissions.add(new Permission("EtatEtapeCampagne.delete"));
                permissions.add(new Permission("DisciplineScientifiqueParent.edit"));
                permissions.add(new Permission("DisciplineScientifiqueParent.list"));
                permissions.add(new Permission("DisciplineScientifiqueParent.view"));
                permissions.add(new Permission("DisciplineScientifiqueParent.add"));
                permissions.add(new Permission("DisciplineScientifiqueParent.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.edit"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.list"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.view"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.add"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.delete"));
                permissions.add(new Permission("Campagne.edit"));
                permissions.add(new Permission("Campagne.list"));
                permissions.add(new Permission("Campagne.view"));
                permissions.add(new Permission("Campagne.add"));
                permissions.add(new Permission("Campagne.delete"));
                permissions.add(new Permission("KeyWord.edit"));
                permissions.add(new Permission("KeyWord.list"));
                permissions.add(new Permission("KeyWord.view"));
                permissions.add(new Permission("KeyWord.add"));
                permissions.add(new Permission("KeyWord.delete"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.edit"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.list"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.view"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.add"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.delete"));
            }
        private static void addPermissionForAdmin(List
        <Permission> permissions){
                permissions.add(new Permission("DisciplineScientifique.edit"));
                permissions.add(new Permission("DisciplineScientifique.list"));
                permissions.add(new Permission("DisciplineScientifique.view"));
                permissions.add(new Permission("DisciplineScientifique.add"));
                permissions.add(new Permission("DisciplineScientifique.delete"));
                permissions.add(new Permission("IdentifiantRecherche.edit"));
                permissions.add(new Permission("IdentifiantRecherche.list"));
                permissions.add(new Permission("IdentifiantRecherche.view"));
                permissions.add(new Permission("IdentifiantRecherche.add"));
                permissions.add(new Permission("IdentifiantRecherche.delete"));
                permissions.add(new Permission("EnjeuxIrd.edit"));
                permissions.add(new Permission("EnjeuxIrd.list"));
                permissions.add(new Permission("EnjeuxIrd.view"));
                permissions.add(new Permission("EnjeuxIrd.add"));
                permissions.add(new Permission("EnjeuxIrd.delete"));
                permissions.add(new Permission("Distinction.edit"));
                permissions.add(new Permission("Distinction.list"));
                permissions.add(new Permission("Distinction.view"));
                permissions.add(new Permission("Distinction.add"));
                permissions.add(new Permission("Distinction.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.list"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.view"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.add"));
                permissions.add(new Permission("DisciplineScientifiqueErcParent.delete"));
                permissions.add(new Permission("SemanticRelationship.edit"));
                permissions.add(new Permission("SemanticRelationship.list"));
                permissions.add(new Permission("SemanticRelationship.view"));
                permissions.add(new Permission("SemanticRelationship.add"));
                permissions.add(new Permission("SemanticRelationship.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.list"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.view"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.add"));
                permissions.add(new Permission("DisciplineScientifiqueErcAssociation.delete"));
                permissions.add(new Permission("DisciplineScientifiqueErc.edit"));
                permissions.add(new Permission("DisciplineScientifiqueErc.list"));
                permissions.add(new Permission("DisciplineScientifiqueErc.view"));
                permissions.add(new Permission("DisciplineScientifiqueErc.add"));
                permissions.add(new Permission("DisciplineScientifiqueErc.delete"));
                permissions.add(new Permission("IdentifiantAuteurExpert.edit"));
                permissions.add(new Permission("IdentifiantAuteurExpert.list"));
                permissions.add(new Permission("IdentifiantAuteurExpert.view"));
                permissions.add(new Permission("IdentifiantAuteurExpert.add"));
                permissions.add(new Permission("IdentifiantAuteurExpert.delete"));
                permissions.add(new Permission("EnjeuxIrdChercheur.edit"));
                permissions.add(new Permission("EnjeuxIrdChercheur.list"));
                permissions.add(new Permission("EnjeuxIrdChercheur.view"));
                permissions.add(new Permission("EnjeuxIrdChercheur.add"));
                permissions.add(new Permission("EnjeuxIrdChercheur.delete"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.edit"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.list"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.view"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.add"));
                permissions.add(new Permission("KeyWordDisciplineScientifiqueErc.delete"));
                permissions.add(new Permission("EtatEtapeCampagne.edit"));
                permissions.add(new Permission("EtatEtapeCampagne.list"));
                permissions.add(new Permission("EtatEtapeCampagne.view"));
                permissions.add(new Permission("EtatEtapeCampagne.add"));
                permissions.add(new Permission("EtatEtapeCampagne.delete"));
                permissions.add(new Permission("DisciplineScientifiqueParent.edit"));
                permissions.add(new Permission("DisciplineScientifiqueParent.list"));
                permissions.add(new Permission("DisciplineScientifiqueParent.view"));
                permissions.add(new Permission("DisciplineScientifiqueParent.add"));
                permissions.add(new Permission("DisciplineScientifiqueParent.delete"));
                permissions.add(new Permission("Chercheur.edit"));
                permissions.add(new Permission("Chercheur.list"));
                permissions.add(new Permission("Chercheur.view"));
                permissions.add(new Permission("Chercheur.add"));
                permissions.add(new Permission("Chercheur.delete"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.edit"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.list"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.view"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.add"));
                permissions.add(new Permission("DisciplineScientifiqueChercheur.delete"));
                permissions.add(new Permission("Campagne.edit"));
                permissions.add(new Permission("Campagne.list"));
                permissions.add(new Permission("Campagne.view"));
                permissions.add(new Permission("Campagne.add"));
                permissions.add(new Permission("Campagne.delete"));
                permissions.add(new Permission("KeyWord.edit"));
                permissions.add(new Permission("KeyWord.list"));
                permissions.add(new Permission("KeyWord.view"));
                permissions.add(new Permission("KeyWord.add"));
                permissions.add(new Permission("KeyWord.delete"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.edit"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.list"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.view"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.add"));
                permissions.add(new Permission("DistinctionDisciplineScientifique.delete"));
            }


            }


