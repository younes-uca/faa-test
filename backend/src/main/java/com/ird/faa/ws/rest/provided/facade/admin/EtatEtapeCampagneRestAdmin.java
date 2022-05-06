package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.EtatEtapeCampagneAdminService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.EtatEtapeCampagne;
import com.ird.faa.ws.rest.provided.converter.EtatEtapeCampagneConverter;
import com.ird.faa.ws.rest.provided.vo.EtatEtapeCampagneVo;

@Api("Manages etatEtapeCampagne services")
@RestController
@RequestMapping("api/admin/etatEtapeCampagne")
public class EtatEtapeCampagneRestAdmin {

@Autowired
private EtatEtapeCampagneAdminService etatEtapeCampagneService;

@Autowired
private EtatEtapeCampagneConverter etatEtapeCampagneConverter;


            @ApiOperation("Updates the specified  etatEtapeCampagne")
            @PutMapping("/")
            public  EtatEtapeCampagneVo update(@RequestBody  EtatEtapeCampagneVo  etatEtapeCampagneVo){
            EtatEtapeCampagne etatEtapeCampagne = etatEtapeCampagneConverter.toItem(etatEtapeCampagneVo);
            etatEtapeCampagne = etatEtapeCampagneService.update(etatEtapeCampagne);
            return etatEtapeCampagneConverter.toVo(etatEtapeCampagne);
            }

    @ApiOperation("Finds a list of all etatEtapeCampagnes")
    @GetMapping("/")
    public List<EtatEtapeCampagneVo> findAll(){
        return etatEtapeCampagneConverter.toVo(etatEtapeCampagneService.findAll());
    }

    @ApiOperation("Finds a etatEtapeCampagne with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EtatEtapeCampagneVo findByIdWithAssociatedList(@PathVariable Long id){
    return etatEtapeCampagneConverter.toVo(etatEtapeCampagneService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search etatEtapeCampagne by a specific criteria")
    @PostMapping("/search")
    public List<EtatEtapeCampagneVo> findByCriteria(@RequestBody EtatEtapeCampagneVo etatEtapeCampagneVo){
        return etatEtapeCampagneConverter.toVo(etatEtapeCampagneService.findByCriteria(etatEtapeCampagneVo));
        }

            @ApiOperation("Finds a etatEtapeCampagne by id")
            @GetMapping("/id/{id}")
            public EtatEtapeCampagneVo findById(@PathVariable Long id){
            return etatEtapeCampagneConverter.toVo(etatEtapeCampagneService.findById(id));
            }

            @ApiOperation("Saves the specified  etatEtapeCampagne")
            @PostMapping("/")
            public EtatEtapeCampagneVo save(@RequestBody EtatEtapeCampagneVo etatEtapeCampagneVo){
            EtatEtapeCampagne etatEtapeCampagne = etatEtapeCampagneConverter.toItem(etatEtapeCampagneVo);
            etatEtapeCampagne = etatEtapeCampagneService.save(etatEtapeCampagne);
            return etatEtapeCampagneConverter.toVo(etatEtapeCampagne);
            }

            @ApiOperation("Delete the specified etatEtapeCampagne")
            @DeleteMapping("/")
            public int delete(@RequestBody EtatEtapeCampagneVo etatEtapeCampagneVo){
            EtatEtapeCampagne etatEtapeCampagne = etatEtapeCampagneConverter.toItem(etatEtapeCampagneVo);
            return etatEtapeCampagneService.delete(etatEtapeCampagne);
            }

            @ApiOperation("Deletes a etatEtapeCampagne by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return etatEtapeCampagneService.deleteById(id);
            }


            }
